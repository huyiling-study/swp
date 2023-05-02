// 当我们类的类型、属性的类型、方法参数及返回值的类型不确定时，可以使用泛型类
(function () {
    // 定义一个泛型类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    // 在实例化类的对象的时候，在确定泛型的类型
    var g1 = new GenericNumber();
    // 设置属性值
    g1.defaultValue = 100;
    // 相加的方法
    g1.add = function (x, y) {
        return x + y;
    };
    console.log(g1.add(10, 20));
    // 在实例化类的对象的时候，在确定泛型的类型
    var g2 = new GenericNumber();
    // 设置属性值
    g2.defaultValue = "100";
    // 相加的方法
    g2.add = function (x, y) {
        return x + y;
    };
    console.log(g2.add("胡伊玲", '10086'));
})();
