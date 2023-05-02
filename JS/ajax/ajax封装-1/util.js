function ajax(options) {
    // 我们传入一个默认的对象，防止将来在传的时候拿不到内容，导致出错
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        headers: {},
        success: function () { },
        error: function () { },
    }
    let { url, method, async, data, headers, success, error } = {
        // 把老的展开，再把新的传进去
        ...defaultoptions,
        ...options
    }
    console.log(url, method, async, data, headers, success, error);

    // 如果有data数据,为对象,并且content-type包含json的
    if(typeof data === 'object' && headers["content-type"]?.indexOf('json')>-1){
        data = JSON.stringify(data)
    }
    else{
        data = queryStringify(data)
    }

    // // 如果是get请求,就要把data拼接在url上
    if(/^get$/i.test(method)&&data) url+='?'+data


    // 发送请求
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    //onload判断失败怎么办,成功怎么办
    xhr.onload = function () {
        // 只要不是200-299开头的，就return，不执行后面代码了
        if (!/^2\d{2}$/.test(xhr.status)) {
            error(`错误状态码：${xhr.status}`)//回调
            return
        }
        // 执行解析 try{}catch{} --捕获错误
        // 语义：我尝试执行这段代码，如果成功就执行success回调了，如果错误我们自己消化(不至于让window报红错)
        try {
            let result = JSON.parse(xhr.responseText)
            // let result = JSON.parse("1111&2222")//报错测试catch(err)
            success(result)
        } catch (err) {
            error('解析失败！因为后端返回的结果不是json 格式字符串')
        }
    }

    //设置请求头内信息 (告诉发送后端数据格式)
    for (let k in headers) xhr.setRequestHeader(k, headers[k])
    if(/^get$/i.test(method)){
        //get是获取数据，只需要发送请求数据，不需要传入数据在发送给后端
        xhr.send()
    }
    else{
        // post 提交，put/patch更新，(提交更新什么呢？所以我们要向后端发送我们提交跟新的数据--data)
        xhr.send(data)
    }
}

// data = queryStringify(data)//将data里的实参(对象)转成 key=value&key=value 形式
// 封装key=value&key=value这种格式的函数
function queryStringify(obj) {
    let str = ''
    for (let k in obj) 
    str += `${k}=${obj[k]}&`
    // username=hyl&password=12345&
    return str.slice(0, -1)
    // username=hyl&password=12345
}

