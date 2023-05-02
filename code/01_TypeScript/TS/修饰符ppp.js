var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 修饰符(类中的成员的修饰符):主要是描述类中成员(属性，构造函数，方法)的可访问性
// 类中的成员都有自己默认的访问修饰符public
// private修饰符，类中成员如果使用private来修饰，那么外部无法访问到这个成员数据，子类也是无法访问该成员数据的
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        // 方法
        Person.prototype.eat = function () {
            console.log('这个小饼干真好吃', this.name);
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name) {
            return _super.call(this, name) || this;
        }
        Student.prototype.play = function () {
            console.log('我喜欢布娃娃', this.name);
        };
        return Student;
    }(Person));
    var person1 = new Person('曹宏钰');
    console.log(person1.name); //error:属性“name”为私有属性，只能在类“Person”中访问
    person1.eat(); //这个小饼干真好吃 曹宏钰
    var student = new Student('胡伊玲');
    console.log(student.name); //
    student.play(); //我喜欢布娃娃 胡伊玲
})();
