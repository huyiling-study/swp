// 可选参数:函数在声明的时候,内部的参数使用了?进行修饰,那么该参数可传可不传
// 默认参数:函数在声明的时候,内部的参数有自己的默认值
(() => {
    const getFullName = function (firstName: string = '胡', lastName?: string): string {
        if (lastName) {
            return firstName+lastName
        } else {
            return firstName
        }
    }


    // 函数调用
    // 什么也不传,就返回默认姓氏,给lastName加?修饰
    console.log(getFullName());
    // 只传入姓氏,就返回姓氏
    console.log(getFullName('张'));
    // 传入姓氏和名字，返回姓名
    console.log(getFullName('张','国华'));
})()