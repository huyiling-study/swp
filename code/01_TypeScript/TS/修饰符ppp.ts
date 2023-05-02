// 修饰符(类中的成员的修饰符):主要是描述类中成员(属性，构造函数，方法)的可访问性
// 类中的成员都有自己默认的访问修饰符public
// private修饰符，类中成员如果使用private来修饰，那么外部无法访问到这个成员数据，子类也是无法访问该成员数据的

// 构造函数中的参数可以使用public、privte、protected进行修饰，只要在构造函数的参数前添加修饰符，该类都会自动添加这个属性成员
(()=>{
     class Person{
        // name:string
        // private name:string
        protected name:string
        constructor(name:string){
            this.name = name
        }
        // 方法
        eat(){
            console.log('这个小饼干真好吃',this.name);
        }
     }

     class Student extends Person{
        constructor(public name:string){
            super(name)
        }
        play(){
            console.log('我喜欢布娃娃',this.name);
        }
     }


     const person1 = new Person('曹宏钰')
     console.log(person1.name);//error:属性“name”为私有属性，只能在类“Person”中访问
     person1.eat()//这个小饼干真好吃 曹宏钰

     const student = new Student('胡伊玲')
     console.log(student.name);//
     student.play()//我喜欢布娃娃 胡伊玲
})()