// readonly修饰符：关键字，对类的成员进行修饰,修饰后，该属性成员，就不能在外部被随意修改了

// readonly修饰类中的 -----成员属性操作
// class Person {
//     readonly name: string//初始化
//     // 1.构造函数中，可以对只读属性成员的数据进行修改
//     constructor(name: string) {
//         this.name = name
//         // this.name = 'ooo'
//     }
//     sayHi() {
//         console.log('Hello', this.name);
//         // 2.类中的普通方法中，也不能修改 readonly修饰的成员的 属性值
//         // this.name = 'huyiling'//error:无法分配到 "name" ，因为它是只读属性。
//     }
// }
// 4.在初始化、实例化对象是，可以对只读属性进行初始化操作



// readonly修饰类中的 -----构造函数中的参数（参数属性）
class Person{
    // 构造函数中的name参数，一旦使用readonly进行修饰后，那么name参数可以叫参数属性
    // 1.构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了name的属性成员
    // 2.构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改Person类中的name属性成员值的
    constructor(readonly name:string = "大甜甜"){
        this.name = name
    }
}




const person1: Person = new Person()
console.log(person1);
console.log(person1.name);
// 3.在外部，也不能修改 readonly修饰的成员的 属性值
person1.name = '胡伊玲'//error:无法分配到 "name" ，因为它是只读属性。
console.log(person1);
console.log(person1.name);

