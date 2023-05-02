function A() {
    console.log('A-布局创建');
}
function A_A(){
    console.log('A_A');
}
//以 _a开头的私有方法
function _a_commen(){
    console.log('_a_commen');
}
function test(){
    console.log('A-test1');
}

//导出
export{
    A,
    A_A,
    test
}