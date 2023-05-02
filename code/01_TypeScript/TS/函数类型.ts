// 为了使用接口表示函数类型，我们需要给接口定义一个 --调用签名
// 它就像是一个只有参数列表和返回值类型的函数定义，参数里面每一个参数都有名字和类型
(()=>{
    // 函数类型：通过接口的方式作为函数的类型来使用

    interface SerchFun{
        // 调用签名
        (str:string,subString:string):boolean
    }

    // 返回boolean类型
    var searchStr:SerchFun = function(str:string,subString:string):boolean{
        return str.search(subString)>-1
    }

    console.log(searchStr('abcd','f'));
    console.log(searchStr('abcd','d'));
    
})()