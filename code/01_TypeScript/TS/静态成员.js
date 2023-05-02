// 静态成员：在类中通过static修饰的属性或者方法，就是静态的属性及静态的方法，也称之为静态成员
// 静态成员在使用的时候是通过 类名.静态属性 这种语法来调用的
(function () {
    var Person = /** @class */ (function () {
        // 构造函数是不能通过static来修饰的
        function Person() {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        // 静态方法
        Person.sayHi = function () {
            console.log('Hello');
        };
        // 静态属性
        // static name:string//error:静态属性“name”与构造函数“Person”的内置属性函数“name”冲突
        Person.name1 = "小甜甜";
        return Person;
    }());
    // const person: Person = new Person()
    // 通过实例对象调用的属性（实例属性）
    // console.log(person.name1);//error
    // 通过实例对象调用的方法（实例方法）
    // person.sayHi()//error：属性“sayHi”在类型“Person”上不存在 //sayHi现在是静态方法
    //不用创建类的实列对象，来访问类的成员、方法
    // 通过类名.静态属性的方式来访问该成员数据
    console.log(Person.name1);
    // 通过类名.静态属性的方式来设置该成员数据
    Person.name1 = '小宝宝';
    console.log(Person.name1);
    // 通过类名.静态方法的方式来调用内部的静态的方法
    Person.sayHi();
})();
