// 多个泛型参数的函数：函数中有多个泛型的参数
(function () {
    // 返回一个数组，第一个是K型，第二个是V型
    function getMsg(value1, value2) {
        return [value1, value2];
    }
    var arr1 = getMsg('jack', 198.054);
    console.log("".concat(arr1[0].toString(), "\u7684\u4F53\u91CD").concat(arr1[1].toFixed(2), "\u65A4"));
})();
