// 如果直接对一个泛型参数取 length 属性 会报错
(function () {
    function getLength(x) {
        return x.length;
    }
    console.log(getLength("Hello!"));
    // console.log(getLength<number>(12345));//error：number这个类型是没有length这个属性的
})();
