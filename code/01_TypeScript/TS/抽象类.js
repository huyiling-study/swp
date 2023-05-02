/*
    抽象类：可以包含未实现的抽象方法(抽象方法一般没有任何具体内容的实现)
    抽象方法可以包含实例方法，抽象类是不能被实例化的
    为了让子类进行实例化及实现内部的抽象方法
*/
// abstract 关键字 是用于定义抽象类和抽象类内部定义的抽象方法
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
// 抽象类的目的/作用:最终都是为子类服务的
(function () {
    // 定义一个抽象类
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        // abstract eat() {
        //     // console.log("好好吃哦");//error：方法“eat”（抽象方法）不能具有实现
        // }
        // 实例方法
        Animal.prototype.sayHi = function () {
            console.log('你好啊');
        };
        return Animal;
    }());
    // 定义一个子类(派生类)Dog
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '小黄';
            return _this;
        }
        // 2.父类的抽象方法在这实现
        Dog.prototype.eat = function () {
            console.log("狗粮真好吃");
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.eat();
    dog.sayHi();
    /**
        抽象类
        不能创建实例对象，只有实现类才能创建实例 */
    // const ani:Animal = new Animal()//error
})();
