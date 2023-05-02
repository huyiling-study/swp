/* 泛型：在 定义函数、接口、类的时候不能  预先确定要使用的数据的类型
    而是在 使用函数、接口、类的时候才能确定数据类型
*/
(function () {
    /* 需求：定义一个函数，传入两个参数，第一参数是数据，第二个参数是数量，
     函数的作用：根据数量产生对应个数的数据，存放在一个数组中*/
    // 需求：传入任意类型的数据，返回来的是存储这个任意类型的数组
    // 1.在定义时不预先确定数据类型
    function getAnyData(value, count) {
        // const arr:T[] = []
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    // 2.在使用的时候确定数据类型
    var arr3 = getAnyData(200.12345, 5);
    console.log(arr3);
    console.log(arr3[0].toFixed(2));
    var arr4 = getAnyData('abcfd', 3);
    console.log(arr4);
    console.log(arr4[0].split(""));
})();
