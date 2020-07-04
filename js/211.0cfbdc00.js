(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{866:function(n,e){n.exports="### title\n\nReverse a singly linked list.\n\nExample:\n\n```js\nInput: 1->2->3->4->5->NULL\nOutput: 5->4->3->2->1->NULL\n```\n\nFollow up:\n\nA linked list can be reversed either iteratively or recursively. Could you implement both?\n\n### Analyze\n\n```js\n      prev  cur  next\n        1 -> 2 -> 3 -> 4 -> 5 -> null\nnull <- 1 -> 2 -> 3 -> 4 -> 5\n```\n\nstep:\n\n1. 定义三个变量 prev, cur, next 表示上一个值, 当前值, 下一个值;\n2. 如果存在 cur.next 则将 cur.next 指向 prev;\n3. 将 cur 移动到 next 位置, prev 移动到 cur 位置, 重复步骤 2;\n\n```js\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n  let prev = null\n  let cur = head\n  if (head) {\n    let next = head.next\n    while (cur.next) {\n      cur.next = prev\n      prev = cur\n      cur = next\n      next = next.next\n    }\n    cur.next = prev\n  }\n  return cur\n};\n```\n\n这样写存在一些冗余的代码, 比如需要判断 head 是否为空, 同时因为 while 中的条件是 cur.next, 因为末尾的 cur.next 需要单独处理一遍, 比较麻烦, 因此进而优化。\n\n```js\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n  let prev = null\n  let cur = head\n  while (cur !== null) {\n    let next = cur.next\n    cur.next = prev\n    prev = cur\n    cur = next\n  }\n  return prev\n};\n```\n\n根据题目的建议, 接着用递归的方式实现一遍(值得注意的是, 迭代与递归的写法都是能互相转换的。)\n\n```js\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n  let prev = null\n  let cur = head\n\n  const recursiveFn = () => {\n    if (cur === null) return\n\n    let next = cur.next\n    cur.next = prev\n    prev = cur\n    cur = next\n\n    recursiveFn()\n  }\n  recursiveFn()\n  return prev\n};\n```\n\n### Sister Title\n\n92"}}]);