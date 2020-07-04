(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{937:function(n,e){n.exports="```js\n// ---- some useful fn to do with linked_list ----\n\nfunction ListNode(val) {\n  this.val = val;\n  this.next = null;\n}\n\n/**\n * create init linked list for leetcode.\n */\nvar list = (function createLinkedList(...args) {\n  const reverseArgs = args.reverse()\n  const tmplistNode = new ListNode(0)\n  let length = reverseArgs.length\n  let cur = new ListNode(reverseArgs[length - 1])\n  tmplistNode.next = cur\n  while (length-- && length >= 1) {\n    let next = new ListNode(reverseArgs[length - 1])\n    cur.next = next\n    cur = next\n  }\n\n  return tmplistNode.next\n})(1, 2, 3, 4, 5)\n\n/**\n * print the linked list\n */\nvar printList = function (list) {\n  let cur = list\n  let str = ''\n  while (cur) {\n    str += `${cur.val} -> `;\n    cur = cur.next\n    cur === null && (str += 'null')\n  }\n  console.log(str)\n}\n```"}}]);