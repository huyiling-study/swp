// 多个泛型参数的函数：函数中有多个泛型的参数
(()=>{
    // 返回一个数组，第一个是K型，第二个是V型
    function getMsg<K,V>(value1:K,value2:V):[K,V]{
        return [value1,value2]
    }
    const arr1 = getMsg<string,number>('jack',198.054)
    console.log(`${arr1[0].toString()}的体重${arr1[1].toFixed(2)}斤`);
    
})()