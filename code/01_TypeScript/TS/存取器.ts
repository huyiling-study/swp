// 存取器：用getters/setters来截取对对象成员的访问。他能帮助你有效的控制对象成员的访问
(() => {
    // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        // 姓名的成员属性（外部可以访问，也可以修改）
        // 存取器 ---负责读取数据(可读)
        get fullName() {
            return this.firstName + '_' + this.lastName
        }
        // 设置器 ---负责设置数据(修改)(可写)
        set fullName(val) {
            // 把姓氏和名字获取到新的属性值，赋值给firstName和lastName
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]

        }
    }

    const person: Person = new Person('东方', '不败')
    // 获取该属性成员属性
    console.log(person.fullName);
    console.log(person);

    // 设置该属性的数据
    person.fullName = '诸葛_孔明'
    console.log(person.fullName);
    console.log(person);
})()