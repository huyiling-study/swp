// 类：可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
(()=>{
    // ts中类的定义及使用
    // 1.定义一个类
    class Person{
        // 2.定义属性
        name:string
        age:number
        gender:string
        // 3.定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
        // constructor(name:string,age:number,gender:string)
        //设置默认值
        constructor(name:string='猪猪侠',age:number=3,gender:string='女'){
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 4.定义实例方法
        sayHi(str:string){
            console.log(`大家好，我是${this.name},今年${this.age}岁,是个${this.gender}孩子`,str);
        }
    }

    // ts使用类  4.实例化对象，可以进行初始化操作
    const person = new Person('佐助',10,'男')
    person.sayHi('你叫什么名字啊')

})()