// 函数:封装了一些重复使用的代码
(() => {

    // 函数声明,命名函数
    function add1(x: string, y: string): string {
        return x + y
    }
    const result1: string = add1('1111', '3333')
    console.log(result1);//11113333


    // 函数表达式,匿名函数
    // 函数的返回值类型是number
    const add2 = function (x: number, y: number): number {
        return x + y
    }
    const result2: number = add2(1111, 3333)
    console.log(result2);//4444


    // 函数的完整的写法
    // 变量名add3 --->函数add3
    // (x: number, y: number) => number当前这个函数的类型
    // function(x: number, y: number): number {return x+y} 就相当于符合上面这个函数类型的值
    const add3: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
    }
    console.log(add3);
})()