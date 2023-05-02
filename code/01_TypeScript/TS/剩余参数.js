// 剩余参数（rest参数）
// 剩余参数 是放在函数声明的时候所有参数的 ---最后
(function () {
    // 
    // ...args:string[] 将剩余的参数，放在一个字符串数组中，args里面
    function showMsg(str1, str2) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log(str1);
        console.log(str2);
        console.log.apply(console, args);
    }
    showMsg('a', 'b', 'c', 'd');
})();
