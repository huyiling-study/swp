// 类 类型：类的类型，可以通过接口来实现
(function () {
    // 定义一个类，这个类的类型就是上面定义的接口
    // implements 实现
    // 类实现了接口，接口约束了类
    var Person1 = /** @class */ (function () {
        function Person1() {
        }
        Person1.prototype.fly = function () {
            console.log("实现我会飞了");
        };
        return Person1;
    }());
    //实例化对象 
    var person1 = new Person1();
    person1.fly();
    // 定义一个类,这个类的类型是Ifly,Swing（当前类实现多个接口，一个类可以同时被多个接口约束）
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log("飞");
        };
        Person2.prototype.swing = function () {
            console.log('游');
        };
        return Person2;
    }());
    var person2 = new Person2();
    person2.fly();
    person2.swing();
    // 定义一个类，直接实现FlySwing这个接口
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('飞飞飞');
        };
        Person3.prototype.swing = function () {
            console.log('游游游');
        };
        return Person3;
    }());
    var person3 = new Person3();
    person3.fly();
    person3.swing();
    // 总结:接口和接口之间叫继承（extends），类和类之间叫实现（）implements
})();
