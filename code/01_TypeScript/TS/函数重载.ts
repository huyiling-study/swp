// 函数重载:函数名字相同，函数的参数及个数不同
(() => {
    // 需求:有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

    // 函数重载声明
    function add(x:string,y:string):string
    function add(x:number,y:number):number

    function add(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y//字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y//数值相加
        }
    }

    // 函数调用
    // 两个参数都是字符串
    console.log(add('东方','不败'));
    // 两个参数都是数字
    console.log(add(1,2));
    // 此时如果传入的是非法的数据，ts应该提示错误信息
    console.log(100,'块钱');

})()

