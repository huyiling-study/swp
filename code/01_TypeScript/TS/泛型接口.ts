// 通过泛型接口约束函数，约束类的
// 泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型
// 在使用接口时，再指定具体的泛型类型
(() => {

    /* 
    雷求:
    定义一个类,用来存储用户的相关信息(id,名字,年龄)
    通过一个类的实例对象调用add方法可以添加多个用户信息对象,
    调用getUserId方法可以根据id获取某个指定的用户信息对象
    */


    // 1.定义一个泛型接口
    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T //参数t是T类型的，返回值是T类型的
        getUserId: (id: number) => T
    }

    class User {
        id?: number
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    // 定义一个类，可以针对用户信息对象进行添加、查询操作
    // 2.类实现泛型接口,使用的时候指定具体类型
    class UserCRUD implements IBaseCRUD<User>{
        // 用来保存多个User类型的用户信息对象
        data: Array<User> = []


        // 用来保存多个用户信息对象方法
        add(user: User): User {
            // 随机产生id
            user.id = Math.round(Date.now() + Math.random())
            // 把用户信息对象添加到data数组中
            this.data.push(user)
            return user
        }

        // 根据id查询指定的用户信息对象
        getUserId(id: number): User {
            return this.data.find(user => user.id === id)
        }
    }

    // 实例化添加用户信息对象的类UserCRUD
    const userCRUD: UserCRUD = new UserCRUD()
    userCRUD.add(new User('胡伊玲', 18))
    userCRUD.add(new User('小黑', 16))
    const { id } = userCRUD.add(new User('小王', 11))
    console.log(userCRUD.data);

    // 根据id查询用户信息对象数据
    const user = userCRUD.getUserId(id)
    console.log(user);
})()