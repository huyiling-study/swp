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
// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，A类叫子类，B类叫基类
// 子类 -->派生类
// 基类 -->超类(父类)
// 一旦发生了继承的关系，就出现了父子类的关系
(function () {
    // 1.定义一个类,作为基类(超类/父类)来使用
    var Person = /** @class */ (function () {
        // 2.定义构造函数
        function Person(name, age, gender) {
            if (name === void 0) { name = '伊玲'; }
            if (age === void 0) { age = 18; }
            if (gender === void 0) { gender = '女'; }
            // 更新属性数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 3.定义实列方法
        Person.prototype.sayHi = function (str) {
            console.log("\u6211\u662F:".concat(this.name, ",\u4F60\u662F:").concat(str));
        };
        return Person;
    }());
    // 定义一个类，继承Person
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, gender) {
            // super 调用父类中的构造函数（继承属性）
            return _super.call(this, name, age, gender) || this;
        }
        // 调用父类中的方法（继承方法）
        Student.prototype.sayHi = function () {
            console.log('我是学生类中的sayHi方法');
            // 调用父类中的sayHi方法
            _super.prototype.sayHi.call(this, '胡伊玲');
        };
        return Student;
    }(Person));
    // 实例化Person
    var person = new Person('小米', 16, '女');
    person.sayHi('小红');
    // 实例化Student
    var student = new Student('小黑', 15, '男');
    student.sayHi();
    // 总结:
    // 类和类之间如果要有继承关系，需要使用extends
    // 子类可以调用父类中的构造函数，使用的是super关键字
    // 子类可以调用父类中的继承方法，使用的是super关键字
    // 子类可以重写父类的方法
})();
