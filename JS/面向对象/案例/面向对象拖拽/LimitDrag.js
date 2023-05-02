function LimitDrag(id) {
    // 继承父类所有属性  ————构造函数的伪装
    Drag.apply(this, [id]);
}
//继承方法 ————原型链
// 调用构造函数继承 
for(var funcName in Drag.prototype){
    LimitDrag.prototype[funcName] = Drag.prototype[funcName]
}
//子类重写父类鼠标移动方法(多态)
//控制在窗口内
LimitDrag.prototype.funcMove = function (ev) {
    var e = ev || window.event;
    var l = e.clientX - this.offsetX
    var t = e.clientY - this.offsetY
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    if (l <= 0) l = 0;
    if (t <= 0) t = 0;
    if (l > windowWidth - this.oDiv.offsetWidth) {
        l = windowWidth - this.oDiv.offsetWidth
    }
    if (t > windowHeight - this.oDiv.offsetHeight) {
        t = windowHeight - this.oDiv.offsetHeight
    }
    this.oDiv.style.left = l + 'px'
    this.oDiv.style.top = t + 'px'
}