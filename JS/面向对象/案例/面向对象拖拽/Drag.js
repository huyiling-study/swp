
function Drag(id) {
    this.oDiv = document.getElementById(id)
    var _this = this
    // 构造函数调用方法 用 (构造函数.) 调用 --this.funcDown this.funcUp
    this.oDiv.onmousedown = function (ev) {
        _this.funcDown(ev)
    }
    document.onmouseup = this.funcUp
}

Drag.prototype.funcDown = function (ev) {
    var e = ev || window.event
    var _this = this
    this.offsetX = e.clientX - this.oDiv.offsetLeft;
    this.offsetY = e.clientY - this.oDiv.offsetTop;
    // 构造函数调用方法 用 (构造函数.) 调用 --this.funcMove
    document.onmousemove = function (ev) {
        _this.funcMove()
    }
}

Drag.prototype.funcMove = function (ev) {
    var e = ev || window.event
    this.oDiv.style.left = e.clientX - this.offsetX + "px"
    this.oDiv.style.top = e.clientY - this.offsetY + "px"
}

Drag.prototype.funcUp = function () {
    document.onmousemove = null
}


