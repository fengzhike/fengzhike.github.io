# js几种继承对比
最近发现有不少人搞不明白js的继承，虽然ES6给了extends这个简单好用的方法，但是基于原型的实现也很有必要搞清楚，所以简单整理了一下。<br/>
继承的可以实现代码复用，通过继承，子类可以拥有父类的方法，给开发带来很大的便利，下面对比几种js中常用的继承方式。先给出一个父类。
```
//父类
function Person(name){
    this.name = name||'person';
    this.say = function(){
        console.log(this.name + ' hi')
    }
}
Person.prototype.eat = function(food){
    console.log(this.name+'吃'+food)
}
```
上面👆这个类，拥有自己的属性和方法以及原型方法，这些是子类需要继承的

## 原型链继承
利用原型链的特性，将父类的实例作为子类的原型
```
//子类 Student
function Student(){}
Student.prototype = new Person();

var student = new Student();

console.log(student.name) //'person'
student.say() //person hi
student.eat('bread') // person 吃 bread
```
此时子类Student的原型是父类Person的实例(Student.prototype = new Person())，Student的实例首先继承于Person.prototype，然后Student.prototype.__proto__还指向了Person.prototype。所以以Student为构造函数生成的实例student也继承了Person.prototype的属性和方法。<br/>
这种继承是有缺点的，在实例中改变属性和方法，原型上的属性也会发生变化，同时导致其他实例的变化，不能实现多态性。在创建子类实例时，不能向父类的构造函数传递参数

## 构造函数继承
利用构造函数，直接复制父类的属性方法给子类
```
function Student(name){
    Person.call(this,name);
}
var student = new Student('小红');

console.log(student.name);//小红
student.say(); //小红 hi
student.eat("bread");//Uncaught TypeError: student.eat is not a function
console.log(student instanceof Student) //true
console.log(student instanceof Person) //false
```
可见这种继承方式，父类的属性和方法完美继承了，并且能子在实例化的时候传入参数，但是父类原型上的方法没有继承，父类也不在子类的原型链上

## 组合继承
以上两种继承方式都有缺陷，那么考虑把两种方式结合起来，通过原型实现对原型的继承，通过构造函数实现对实例的继承，下面👇看一种组合式继承
```
function Student(name){
    Person.call(this,name);
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
var student = new Student('小红')


console.log(student.name);//小红
student.say(); //小红 hi
student.eat("bread");//小红吃bread
console.log(student instanceof Student) //true
console.log(student instanceof Person) //true

```
此时的继承就相对完美了,但是调用两次了父类构造函数，效率较低

## 寄生组合式继承
通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，通过创建中间类的方式隔断父类子类的直接联系
```
//继承函数
function extendsFun(Super,Sub){
    function F() {}
    F.prototype = Super.prototype;
    Sub.prototype = new F();
    Sub.prototype.constructor = Sub;
}

function Student(name){
    Person.call(this,name);
}
extendsFun(Person,Student);
var student = new Student('小红');

console.log(student.name);//小红
student.say(); //小红 hi
student.eat("bread");//小红吃bread
console.log(student instanceof Student) //true
console.log(student instanceof Person) //true
```
这样通过寄生载体方式，实现类的继承，避免了两次调用父类的构造函数的缺点，推荐这种方式
- - -
2018.3.8
