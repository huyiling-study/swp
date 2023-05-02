// 类 类型：类的类型，可以通过接口来实现
(() => {
    // 定义一个接口
    interface Fly {
        fly()
    }
    // 定义一个类，这个类的类型就是上面定义的接口
    // implements 实现
    // 类实现了接口，接口约束了类
    class Person1 implements Fly {
        fly() {
            console.log("实现我会飞了");

        }
    }
    //实例化对象 
    const person1 = new Person1()
    person1.fly()





    // 定义一个接口
    interface Swing {
        swing()
    }
    // 定义一个类,这个类的类型是Ifly,Swing（当前类实现多个接口，一个类可以同时被多个接口约束）
    class Person2 implements Fly, Swing {
        fly() {
            console.log("飞");

        }
        swing() {
            console.log('游');

        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swing()


    // 总结:类可以通过接口的方式,来定义当前这个类的类型
    // 类可以实现一个接口,类也可以实现多个接口,要注意,接口中的内容都要真正的实现


    // 接口可以继承其它多个接口
    interface FlySwing extends Fly, Swing { }
    // 定义一个类，直接实现FlySwing这个接口
    class Person3 implements FlySwing {
        fly() {
            console.log('飞飞飞');
        }
        swing() {
            console.log('游游游');
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swing()

    // 总结:接口和接口之间叫继承（extends），类和类之间叫实现（）implements


})()