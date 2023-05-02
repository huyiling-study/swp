(function () {
    // readonly 只读属性
    /*
        ? 可选属性（可有可无）
        优点：
        1.可以对可能存在的属性进行预定义
        2.可以捕获引用不存在的属性时的错误
    */
    // 定义一个对象，该对象的类型就是我定义的接口Iperson
    var person = {
        id: 1,
        name: '小虎',
        age: 18.
    };
    console.log(person);
    // person.id = 2 //error
    // console.log(person);
})();
