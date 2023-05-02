// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，A类叫子类，B类叫基类
// 子类 -->派生类
// 基类 -->超类(父类)
// 一旦发生了继承的关系，就出现了父子类的关系
(() => {
    // 1.定义一个类,作为基类(超类/父类)来使用
    class Person {
        // 定义属性
        name:string
        age:number
        gender:string
        // 2.定义构造函数
        constructor(name:string='伊玲',age:number=18,gender:string='女'){
            // 更新属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 3.定义实列方法
        sayHi(str:string){
            console.log(`我是:${this.name},你是:${str}`);
        }
    }


    // 定义一个类，继承Person
    class Student extends Person{
        constructor(name:string,age:number,gender:string){
            // super 调用父类中的构造函数（继承属性）
            super(name,age,gender)
        }
        // 调用父类中的方法（继承方法）
        sayHi(){
            console.log('我是学生类中的sayHi方法')
            // 调用父类中的sayHi方法
            super.sayHi('胡伊玲')
            
        }
    }


    // 实例化Person
    const person = new Person('小米',16,'女')
    person.sayHi('小红')
    // 实例化Student
    const student = new Student('小黑',15,'男')
    student.sayHi()

    // 总结:
    // 类和类之间如果要有继承关系，需要使用extends
    // 子类可以调用父类中的构造函数，使用的是super关键字
    // 子类可以调用父类中的继承方法，使用的是super关键字
    // 子类可以重写父类的方法
})()