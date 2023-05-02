/*
    抽象类：可以包含未实现的抽象方法(抽象方法一般没有任何具体内容的实现)
    抽象方法可以包含实例方法，抽象类是不能被实例化的
    为了让子类进行实例化及实现内部的抽象方法
*/
// abstract 关键字 是用于定义抽象类和抽象类内部定义的抽象方法



// 抽象类的目的/作用:最终都是为子类服务的
(() => {
    // 定义一个抽象类
    abstract class Animal {
        // 1.抽象方法
        abstract eat()
        // abstract eat() {
        //     // console.log("好好吃哦");//error：方法“eat”（抽象方法）不能具有实现
        // }

        // 实例方法
        sayHi() {
            console.log('你好啊')
        }
    }

    // 定义一个子类(派生类)Dog
    class Dog extends Animal {
        name: string = '小黄';
        // 2.父类的抽象方法在这实现
        eat() {
            console.log("狗粮真好吃");
        }
    }



    const dog: Dog = new Dog()
    dog.eat()
    dog.sayHi()

    /**
        抽象类
        不能创建实例对象，只有实现类才能创建实例 */
    // const ani:Animal = new Animal()//error
})()