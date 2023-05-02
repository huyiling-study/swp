// 通过泛型接口约束函数，约束类的
// 泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型
// 在使用接口时，再指定具体的泛型类型
(function () {
    /*
    雷求:
    定义一个类,用来存储用户的相关信息(id,名字,年龄)
    通过一个类的实例对象调用add方法可以添加多个用户信息对象,
    调用getUserId方法可以根据id获取某个指定的用户信息对象
    */
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    // 定义一个类，可以针对用户信息对象进行添加、查询操作
    // 2.类实现泛型接口,使用的时候指定具体类型
    var UserCRUD = /** @class */ (function () {
        function UserCRUD() {
            // 用来保存多个User类型的用户信息对象
            this.data = [];
        }
        // 用来保存多个用户信息对象方法
        UserCRUD.prototype.add = function (user) {
            // 随机产生id
            user.id = Math.round(Date.now() + Math.random());
            // 把用户信息对象添加到data数组中
            this.data.push(user);
            return user;
        };
        // 根据id查询指定的用户信息对象
        UserCRUD.prototype.getUserId = function (id) {
            return this.data.find(function (user) { return user.id === id; });
        };
        return UserCRUD;
    }());
    // 实例化添加用户信息对象的类UserCRUD
    var userCRUD = new UserCRUD();
    userCRUD.add(new User('胡伊玲', 18));
    userCRUD.add(new User('小黑', 16));
    var id = userCRUD.add(new User('小王', 11)).id;
    console.log(userCRUD.data);
    // 根据id查询用户信息对象数据
    var user = userCRUD.getUserId(id);
    console.log(user);
})();
