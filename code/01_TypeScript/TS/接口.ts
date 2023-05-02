(() => {
    // readonly 只读属性
    /*
        ? 可选属性（可有可无）
        优点：
        1.可以对可能存在的属性进行预定义
        2.可以捕获引用不存在的属性时的错误
    */

    // 定义一个接口，该接口作为person对象的类型使用，限定/约束该对象中的属性数据
    interface IPerson{
        readonly id:number,
        name:string,
        age:number,
        // sex 可有可无
        sex?:string
    }
    // 定义一个对象，该对象的类型就是我定义的接口Iperson
    const person:IPerson = {
        id:1,
        name:'小虎',
        age:18.,
        // sex:'女'
    }

    console.log(person);
    
    // person.id = 2 //error
    // console.log(person);

})()