function queryStringify(obj) {
    let str = ''
    for (let k in obj) 
    str += `${k}=${obj[k]}&`
    return str.slice(0, -1)
}


// 回调函数版本的ajax
function ajax(options) {
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        },
        success: function () { },
        error: function () { },
    }
    let { url, method, async, data, headers, success, error } = {
        ...defaultoptions,
        ...options
    }
    // console.log(url, method, async, data, headers, success, error);



    if(typeof data === 'object' && headers["content-type"]?.indexOf('json')>-1){
        data = JSON.stringify(data)
    }
    else{
        data = queryStringify(data)
    }


    if(/^get$/i.test(method)&&data){
        url+='?'+data
    } 




    // 发送请求
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    //onload判断失败怎么办,成功怎么办
    xhr.onload = function () {
        if (!/^2\d{2}$/.test(xhr.status)) {
            error(`错误状态码：${xhr.status}`)//回调
            return
        }
        // 捕获小范围错误
        try {
            // 尝试执行这行代码，成功就执行success回调，失败就小范围报错，不影响后续代码执行
            let result = JSON.parse(xhr.responseText)
            success(result)
        } catch (err) {
            error('解析失败！因为后端返回的结果不是json 格式字符串')
        }
    }

    for (let k in headers) xhr.setRequestHeader(k, headers[k])
    
    if(/^get$/i.test(method)){
        xhr.send()
    }
    else{
        xhr.send(data)
    }
}

// export default ajax


// promise版本的ajax
function pajax(options){
    return new Promise((resolve,reject)=>{
        ajax({
          ...options,
          success(res){
            resolve(res)
          },
          error(err){
            reject(err)
          }
        })
    })
}


