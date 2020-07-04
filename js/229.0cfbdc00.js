(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{884:function(n,u){n.exports="给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。\n\n示例:\n\n```js\n输入: [0,1,0,3,12]\n输出: [1,3,12,0,0]\n```\n\n说明:\n\n必须在原数组上操作，不能拷贝额外的数组。\n尽量减少操作次数。\n\n### first code\n\n* 思路一: 将 0 从数组中移除, 并用 count 变量计算移除 0 的个数, 最后将数组 push 回 count 个 0。\n\n```js\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n  const length = nums.length\n  let count = 0               // 0 的个数\n  for (let i = 0; i < length; i++) {\n    if (nums[i - count] === 0) {\n      nums.splice(i - count, 1)\n      count++\n    }\n  }\n  for (let i = 0; i < count; i++) {\n    nums.push(0)\n  }\n  return nums\n}\n```\n\n* 思路二: 使用双指针\n\n```js\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n  let m = 0 // 指针一的下标, [0, m) 区域用于存储非 0 元素\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i]) { // 如果存在 num[i] 不为 0, 则让其与 num[m] 交换\n      if (i !== m) {\n        [nums[m], nums[i]] = [nums[i], nums[m]]\n      }\n      m++\n    }\n  }\n  return nums\n}\n```\n\n### 同类题目\n\n26、27、80。"}}]);