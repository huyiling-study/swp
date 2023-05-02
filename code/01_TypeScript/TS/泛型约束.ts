// 如果直接对一个泛型参数取 length 属性 会报错

(() => {
    // 定义一个接口，用来约束将来的某个类型，必须要有length属性
    interface ILenght {
        length: number
    }

    function getLength<T extends ILenght>(x: T): number {
        return x.length
    }

    console.log(getLength<string>("Hello!"));
    // console.log(getLength<number>(12345));//error：number这个类型是没有length这个属性的
    
})()