# Parceljs初探

https://parceljs.org/

Parceljs是一款新的web应用打包工具，是一款零配置，以html为核心的打包工具。

web应用从最初的无打包，到grunt,yoman,gulp,webpack等以js为核心，需要复杂配置的打包工具，尤其是当下最火的webpack，大有一种**前端工程师**即是**配置工程师**的窘境。parceljs一改前辈风格，零配置，轻装上阵，虽然不知道能不能开创一个时代，但是这个思路绝对是一个可行的方向，希望parceljs能够走得更好。下面开始体验
## 安装
**Yarn**

```
$ yarn global add parcel-bundler
```

**npm**

```
$ npm i -g parcel-bundler
```
## 初始化项目

```
//use yarn
$ yarn init -y

//use npm
$ npm init -y
```

## 创建一个index.html和index.js文件
```
$ touch index.html index.js
```

文件内容如下
```
//index.html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

```
//index.js
console.log("hello world");
```

## 运行项目
```
$ parcel index.html
```

浏览器打开http://localhost:1234/ 就好了，是不是觉得少点什么，没错，已经打包完毕并起服务了，是不是很简单。

如果想自定义端口可以加-p <port number> 参数

## 开发时监听文件
```
$ parcel watch index.html
```
此时会监听index.html和其依赖文件，但是并没有起本地服务

## 静态资源加载
静态资源可以通过import或者requirejs的方式加载

```
// Import a module using CommonJS syntax
const dep = require('./path/to/dep');

// Import a module using ES6 import syntax
import dep from './path/to/dep';
```

## 编译
* babel
    - babel肯定是支持的
    ```
    $ npm i -D babel-preset-env
    ```
    - 创建.babelrc文件
    ```
    {
      "presets": ["env"]
    }
    ```
* PostCSS
    - 安装css预处理依赖
    ```
    $ npm -i -D postcss-modules autoprefixer
    ```
    - 创建css预处理文件可命名为：.postcssrc (JSON), .postcssrc.js, or postcss.config.js
    ```
    //.postcssrc (JSON)
    {
      "modules": true,
      "plugins": {
        "autoprefixer": {
          "grid": true
        }
      }
    }

    ```
* PostHTML
    - 安装HTML预处理
    ```
    npm i -g -D posthtml-img-autosize
    ```
    - 创建.posthtmlrc
    ```
    {
      "plugins": {
        "posthtml-img-autosize": {
          "root": "./images"
        }
      }
    }
    ```

## 对比
最后附上一个parceljs与browserify和webapck的官方实验数据，试验于2016年在4核MacBook Pro上，基于一个包含1726个模块的web应用

|工具|时间|
|:-|:-:|
|browserify|22.98s|
|webapck|20.71s|
|**parcel**|**9.98s**|
|**parcel - with cache**|**2.64s**|

webpack的20.71和**parcel - with cache**的**2.64s**，相差一个数量级呀有木有，期待parcel的成长

* * *
2017.12.10
