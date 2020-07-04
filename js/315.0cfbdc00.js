(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{970:function(n,e){n.exports="### Fiber 的数据结构\n\n此小节会通过两个 `demo` 来展示 `Stack Reconciler` 以及 `Fiber Reconciler` 的数据结构。\n\n![](http://with.muyunyun.cn/7621091ae74df1bbd8b00586128a7d44.jpg-300v)\n\n首先用代码表示上图节点间的关系。比如 `a1 节点`下有 `b1、b2、b3 节点`, 就可以把它们间的关系写成 `a1.render = () => [b1, b2, b3]`;\n\n```js\nvar a1 = { name: 'a1', render = () => [b1, b2, b3] }\nvar b1 = { name: 'b1', render = () => [c1] }\nvar b2 = { name: 'b2', render = () => [c2] }\nvar b3 = { name: 'b3', render = () => [] }\nvar c1 = { name: 'c1', render = () => [d1] }\nvar c2 = { name: 'c2', render = () => [] }\nvar d1 = { name: 'd1', render = () => [d2] }\nvar d2 = { name: 'd2', render = () => [] }\n```\n\n#### Stack Reconciler\n\n在 `React 16` 之前，节点之间的关系可以用数据结构中`树的深度遍历`来表示。\n\n如下实现 `walk` 函数, 将深度遍历的节点打印出来。\n\n```js\nwalk(a1)\n\nfunction walk(instance) {\n  if (!instance) return\n  console.log(instance.name)\n  instance.render().map(walk)\n}\n```\n\n输出结果为: `a1 b1 c1 d1 d2 b2 c2 b3`\n\n#### Fiber Reconciler\n\n在 `React 16` 中，节点之间的关系可以用数据结构中的`链表`来表示。\n\n节点之间的链表有三种情形, 用图表示如下:\n\n![](http://with.muyunyun.cn/d7378495a2f16e9058c80326705465f4.jpg-300v)\n\n1. 父节点到子节点(红色虚线)\n2. 同层节点(黄色虚线)\n3. 子节点到父节点(蓝色虚线)\n\n> 父节点指向第一个子节点, 每个子节点都指向父节点，同层节点间是单向链表。\n\n首先, 构建节点的数据结构, 如下所示:\n\n```js\nvar FiberNode = function(instance) {\n  this.instance = instance\n  this.parent = null\n  this.sibling = null\n  this.child = null\n}\n```\n\n然后创建一个将节点串联起来的 `connect` 函数:\n\n```js\nvar connect = function(parent, childList) {\n  parent.child = childList.reduceRight((prev, current) => {\n    const fiberNode = new FiberNode(current)\n    fiberNode.parent = parent\n    fiberNode.sibling = prev\n    return fiberNode\n  }, null)\n\n  return parent.child\n}\n```\n\n> 在 JavaScript 中实现链表的数据结构可以巧用 reduceRight\n\n`connect` 函数中实现了上述链表关系。可以像这样使用它:\n\n```js\nvar parent = new FiberNode(a1)\nvar childFirst = connect(parent, a1.render())\n```\n\n这样子便完成了 `a1 节点`指向 `b1 节点`的链表、`b1、b2、b3 节点间`的单向链表以及 `b1、b2、b3 节点`指向 `a1 节点`的链表。\n\n最后剩下 `goWalk` 函数将全部节点给遍历完。\n\n```js\n// 打印日志以及添加列表\nvar walk = function(node) {\n  console.log(node.instance.name)\n  const childLists = node.instance.render()\n  let child = null\n  if (childLists.length > 0) {\n    child = connect(node, childLists)\n  }\n  return child\n}\n\nvar goWalk = function(root) {\n  let currentNode = root\n\n  while (true) {\n    const child = walk(currentNode)\n    // 如果有子节点\n    if (child) {\n      currentNode = child\n      continue\n    }\n\n    // 如果没有相邻节点, 则返回到父节点\n    while (!currentNode.sibling) {\n      currentNode = currentNode.parent\n      if (currentNode === root) {\n        return\n      }\n    }\n\n    // 相邻节点\n    currentNode = currentNode.sibling\n  }\n}\n\n// 调用\ngoWalk(new FiberNode(a1))\n```\n\n打印结果为 `a1 b1 c1 d1 d2 b2 c2 b3`\n\n`Fiber` 在一个节点上的执行流程总结如下:\n\n* 在当前节点下寻找是否有子节点\n  * 若有, 则进入子节点\n  * 若没有, 则在当前节点下寻找是否有下一个相邻节点\n    * 若有, 则进入下一个相邻节点\n    * 若没有, 则返回它的父节点\n\n### Fiber Reconciler 的优势\n\n通过分析上述两种数据结构实现的代码，可以得出下面结论:\n\n* 基于树的深度遍历实现的 Reconciler: 一旦进入调用栈便无法暂停;\n* 基于链表实现的 Reconciler: 在 `while(true) {}` 的循环中, 可以通过 `currentNode` 的赋值重新得到需要操作的节点，而在赋值之前便可以'暂停'来执行其它逻辑, 这也是 `requestIdleCallback` 能得以在 `Fiber Reconciler` 的原因。\n\n### 相关链接\n\n* [The how and why on React’s usage of linked list in Fiber to walk the component’s tree](https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7)\n* [Fiber Principles: Contributing To Fiber](https://github.com/facebook/react/issues/7942): Fiber 设计思想相关 issue, 推荐。"}}]);