// ts中书写js类，演示效果
(() => {
    // 定义一个类
    class Person {
        // 定义一个构造函数
        constructor(firstname, lastname) {
            // 更新属性数据
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = this.firstname + this.lastname;
        }
    }
    // 定义个函数
    function showFullName(person) {
        return person.firstname + '_' + person.lastname;
    }
    // 实例化对象
    const person = new Person('胡', '伊玲');
    console.log(showFullName(person));
})();
