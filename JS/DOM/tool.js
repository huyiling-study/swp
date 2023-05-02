//  跨浏览器的兼容
function getStyle(node, cssStyle) {
  return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

// 自定义ByClassName方法 
function elementbyclassname(node, classname) {
  var arr = []//存放符合条件的节点
  // 获取node这个节点下所有的子节点（标签）
  var nodes = node.getElementsByTagName("*")
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].className == classname) {
      arr.push(nodes[i])
    }
  }
  return arr
}

