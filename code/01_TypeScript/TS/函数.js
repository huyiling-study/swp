// 函数:封装了一些重复使用的代码
(function () {
    // 函数声明,命名函数
    function add1(x, y) {
        return x + y;
    }
    var result1 = add1('1111', '3333');
    console.log(result1); //11113333
    // 函数表达式,匿名函数
    // 函数的返回值类型是number
    var add2 = function (x, y) {
        return x + y;
    };
    var result2 = add2(1111, 3333);
    console.log(result2); //4444
    // 函数的完整的写法
    // 变量名add3 --->函数add3
    // (x: number, y: number) => number当前这个函数的类型
    // function(x: number, y: number): number {return x+y} 就相当于符合上面这个函数类型的值
    var add3 = function (x, y) {
        return x + y;
    };
    console.log(add3);
})();
