function B() {
    console.log('B-布局创建');
}
function B_B(){
    console.log('B_B');
}
//以 _B开头的私有方法
function _B_commen(){
    console.log('_B_commen');
}
function test(){
    console.log('B-test1');
}

export{
    B,
    B_B,
    test
}
