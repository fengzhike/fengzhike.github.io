# 模块化简述
## 模块化的概念

**模块化**是将系统分离成独立功能部分的方法，各模块分别反映其内部特性，模块间投过接口通信

随着web应用越来越复杂，简单的代码组织方式已经无法满足业务和框架的需求，需要通过**模块化**来组织代码

## 模块化的价值
建立模块化的标准，能够管理模块之间的依赖，提高可维护性的复用性。高内聚 低耦合  _ 软件工程

## 模块化的历史
至今为止，模块化发展了三个阶段：无模块时代，萌芽时代，现代模块时代

### 无模块时代

无模块时代的代码，依靠全局变量引用，会有全局变量泛滥、命名冲突的问题，而且依赖关系不好管理如下面所示

```
//a.js
var a = {
    ...
}
//b.js
var b = {
    ...
}
//index.html
<script src = "a.js"></script>
<script src = "b.js"></script>
```

a和b是全局变量，如果冲突不好处理，若a和b有依赖关系，引用时换个位置就会报错，这种代码组织方式，虽然一定程度上使代码整洁，但是仍然不够成熟

### 模块化萌芽时代
为了解决全局变量冲突和依赖关系的问题，采用了立即执行函数(IIFE)的方式保护变量，此时的模块化主要是以立即执行函数的方式实现的，jq也是典型的立即执行函数的实现方式

```
var moduleA = (function(){
        var _abc = 1;
        var a = {};
        var b = function(){};
        return {
            a:a,
            b:b
        }
})()
//jq风格
(function(window){
    window.jQuery = window.$ = jQuery
})(window)

```
这样的方式，Function内部的变量对全局隐藏了，但是moduleA还是要保留给全局，全局变量还是越来越多，仍然有缺陷

### 现代模块化时代
#### commonjs

2009年，nodejs的出世，给js开发带来了革命性的发展，js可以用来写服务端代码了。CommonJs社区制定了Modules/1.0（http://wiki.commonjs.org/wiki/Modules/1.0） 规范，首次定义了一个模块应该长啥样。Modules/1.0规范包含以下内容：

>   1. 模块的标识应遵循的规则（书写规范）
>   2. 定义全局函数require，通过传入模块标识来引入其他模块，执行的结果即为别的模块暴漏出来的API
>   3. 如果被require函数引入的模块中也包含依赖，那么依次加载这些依赖
>   4. 如果引入模块失败，那么require函数应该报一个异常
>   5. 模块通过变量exports来向往暴漏API，exports只能是一个对象，暴漏的API须作为此对象的属性。

此规范在nodejs中使用并推广了，实现代码如下（官方例子）：

```
//math.js
exports.add = function(){
    var sum = 0,i=0.args=arguments, l=args.length;
    while (i<l){
        sum += args[i++];
    }
    return sum;
};
//increment.js
var add = reuqire('math').add;
exports.increment = function(val){
    return add(val,1);
};
//program.js
var inc = require('increment').increment;
var a = 1;
inc(a);//2
```

modules/1.0规范起源于服务端，无法直接用于浏览器前端，具体表现为：
>   1. 外层没有function包裹，变量暴露在全局。例如上面increment.js的add；
>   2. 资源加载方式不同。服务端require一个模块，直接就从硬盘或内存中读取了，消耗的时间可以忽略。而浏览器需要先从服务端下载下来，再运行代码才能获取api，需要花费一个http请求，也就是说require后的面代码需要资源请求完成才能执行。由于浏览器端是以插入&lt;script&gt;标签的形式来加载资源的（ajax方式不行，有跨域问题），没办法让代码同步执行，所以像commonjs那样的写法会直接报错。所以，社区意识到，要想在浏览器环境中也能模块化，需要对规范进行升级。顺便说一句，CommonJs原来是叫ServerJs，从名字可以看出是专攻服务端的，为了统一前后端而改名CommonJs。（论起名的重要性~）而就在社区讨论制定下一版规范的时候，内部发生了比较大的分歧，分裂出了三个主张，渐渐的形成三个不同的派别：**Modules/1.x**派、**Modules/Async**派、**Modules/2.0**派

commonjs三大派别

* **Modules/1.x派**
    这波人认为可以在此基础上做修改，以满足浏览器端的需要，既然浏览器端需要function的包装，需要异步加载，那就新增一个方案，把现有模块转化为适合浏览器端的就行了，有点像"保皇派"。基于这个主张，制定了Modules/Transport（http://wiki.commonjs.org/wiki/Modules/Transport） 规范，提出了先通过工具把现有模块转化为复合浏览器上使用的模块，然后再使用的方案。

    browserify就是这样一个工具，可以把nodejs的模块编译成浏览器可用的模块。

* **Modules/Async**派
    这一波人有点像“革新派”，他们认为浏览器与服务器环境差别太大，不能沿用旧的模块标准。既然浏览器必须异步加载代码，那么模块在定义的时候就必须指明所依赖的模块，然后把本模块的代码写在回调函数里。模块的加载也是通过下载-回调这样的过程来进行，这个思想就是AMD的基础，由于“革新派”与“保皇派”的思想无法达成一致，最终从CommonJs中分裂了出去，独立制定了浏览器端的js模块化规范AMD
* **Modules/2.0**派
    这一波人有点像“中间派”，既不想丢掉旧的规范，也不想像AMD那样推到重来。他们认为，Modules/1.0固然不适合浏览器，但它里面的一些理念还是很好的，（如通过require来声明依赖），新的规范应该兼容这些，AMD规范也有它好的地方（例如模块的预先加载以及通过return可以暴漏任意类型的数据，而不是像commonjs那样exports只能为object），也应采纳。最终他们制定了一个Modules/Wrappings（http://wiki.commonjs.org/wiki/Modules/Wrappings） 规范，此规范指出了一个模块应该如何“包装”，包含以下内容：
    > 1. 全局有一个module变量，用来定义模块
    > 2. 通过module。declare方法来定义一个模块
    > 3. module.declare方法只接收一个参数，那就是模块的factory，次factory可以是函数也可以是对象，如果是对象，那么模块输出就是此对象。
    > 4. 模块的factory函数传入三个参数：require,exports,module，用来引入其他依赖和导出本模块API
    > 5. 如果factory函数最后明确写有return数据（js函数中不写return默认返回undefined），那么return的内容即为模块的输出。

    使用该规范的例子看起来像这样：
    ```
    //使用exports来对外暴露API
    module.declare(function(require,exports,module){
        exports.foo = "bar"
    })
    //也可以直接return来对外暴露数据
    module.declare(function(){
        return {foo:'bar'}
    })
    ```

#### **AMD**(Asynchronous Module Definition)

AMD规范：(https://github.com/amdjs/amdjs-api/wiki/AMD)

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。

所需资源预先下载执行，

```
//AMD
define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好
    a.doSomething()
    // 此处略去 100 行
    b.doSomething()
    ...
})
```
#### **CMD**(Common Module Definition)

CMD规范：(https://github.com/seajs/seajs/issues/242)

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

延迟执行

```
//CMD
define(function(require, exports, module) {   
    var a = require('./a')   
    a.doSomething()   
    // 此处略去 100 行   
    var b = require('./b')
    // 依赖可以就近书写   
    b.doSomething()   
    // ...
})
```
#### **ES6**import/export

es6在语言规格层面上，实现了模块功能，大有取代commonjs和AMD规范，成为浏览器和服务器通用的模块解决方案的势头

es6模块主要有两个功能：export和import

export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口

import用于在一个模块中加载另一个含有export接口的模块。

也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块


























- - -
2017.11.28
