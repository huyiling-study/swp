/**
多态：
父类型的引用指向了子类型的对象
不同类型的对象针对相同的方法，产生了不同的行为
*/
(() => {
    // 定义父类
    class Animal {
        // 1
        name: string
        // 2
        constructor(name: string) {
            this.name = name
        }
        // 3
        run(distance: number = 0) {
            console.log(`跑了${distance}米的距离`, this.name);
        }
    }

    // 定义子类Dog
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        // 重写父类中的实例方法
        run(distance: number = 5) {
            console.log(`跑了${distance}米的距离`, this.name);
        }
    }

    // 定义子类Pig
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        // 重写父类中的实例方法
        run(distance: number = 15) {
            console.log(`跑了${distance}米的距离`, this.name);
        }
    }


    // 实例化父类对象
    // 不同类型的对象针对相同的方法，产生了不同的行为
    const ani: Animal = new Animal('动物')
    ani.run()
    // 实例化子类对象
    const dog: Dog = new Dog('大黄')
    dog.run()
    // 实例化子类对象
    const pig: Pig = new Pig('八戒')
    pig.run()


    console.log('---------------------');



    // 父类和子类的关系：父子关系，此时，父类类型创建子类对象
    // 夫类型的引用，指向子类型的对象
    const dog1: Animal = new Dog('小狗')
    dog1.run()
    const pig1: Animal = new Pig('小猪')
    pig1.run()


    console.log('---------------------');



    // 该函数需要的参数 是Animal类型 的
    function showRun(ani: Animal) {
        ani.run()
    }
    showRun(dog1)
})()

