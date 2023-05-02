// 类：可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
(function () {
    // ts中类的定义及使用
    var Person = /** @class */ (function () {
        // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
        // constructor(name:string,age:number,gender:string)
        //设置默认值
        function Person(name='猪猪侠', age=3, gender='女') {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 定义实例方法
        Person.prototype.sayHi = function (str) {
            console.log(`大家好，我是${this.name},今年${this.age}岁,是个${this.gender}孩子`,str);
        };
        return Person;
    }());
    // ts使用类，实例化对象，可以进行初始化操作
    var person = new Person()
    person.sayHi('你叫什么名字啊');
})();
