(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{923:function(n,o){n.exports="### 题目\n\n给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。\n\n此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。\n\n注意:\n\n不能使用代码库中的排序函数来解决这道题。\n\n示例:\n\n```js\n输入: [2,0,2,1,1,0]\n输出: [0,0,1,1,2,2]\n```\n\n进阶：\n\n一个直观的解决方案是使用计数排序的两趟扫描算法。\n首先，迭代计算出 0、1 和 2 元素的个数，然后按照 0、1、2 的排序，重写当前数组。\n你能想出一个仅使用常数空间的一趟扫描算法吗？\n\n### 解题\n\n解法一: 计数排序, 在该题目中分别统计出 0、1、2 出现的个数, 并将相应个数的 0、1、2 放回数组。\n\n> 计数排序适用于数组元素非常有限的场景。\n\n```js\n输入\n[2,0,2,1,1,0]\n输出\n[0,1,2,1,1,0]\n预期结果\n[0,0,1,1,2,2]\n```\n\n```js\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar sortColors = function (nums) {\n  let countObj = {}\n  for (let i = 0; i < nums.length; i++) {\n    const key = nums[i]\n    if (typeof(countObj[`${key}`]) === 'number') {\n      countObj[`${key}`] = countObj[`${key}`] + 1\n    } else {\n      countObj[`${key}`] = 1\n    }\n  }\n\n  const count0 = countObj[0] || 0\n  const count1 = countObj[1] || 0\n  const count2 = countObj[2] || 0\n  for (let i = 0; i < count0 + count1 + count2; i++) {\n    if (i < count0) {\n      nums[i] = 0\n    } else if (i >=count0 && i < count0 + count1) {\n      nums[i] = 1\n    } else if (i >= count1 && i < count0 + count1 + count2) {\n      nums[i] = 2\n    }\n  }\n}\n```\n\n解法二: 三路快排\n\n思路: 三路快排的思想是同时排序小于选定值，等于选定值和大于选定值三种情况。在这里我们随机选取一个值 v 作为分界点, 分别排序小于 v，等于 v 和大于 v 的。该题中 v 为 1。\n\n![](http://with.muyunyun.cn/9617f034f2e7d0535ac73d51612d2f07.jpg)\n\n```js\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar sortColors = function (nums) {\n  /**\n   * nums[0, zero] = 0\n   * nums[two, nums.length - 1] = 2\n   */\n  let [zero, two] = [0, nums.length - 1]\n  for (let i = 0; i <= two; i++) {\n    if (nums[i] === 0) {\n      [nums[i], nums[zero]] = [nums[zero], nums[i]]\n      zero++\n    }\n\n    if (nums[i] === 2) {\n      [nums[i], nums[two]] = [nums[two], nums[i]]\n      i--\n      two--\n    }\n  }\n}\n```\n\n该算法的时间复杂度为 O(n), 空间复杂度为 O(1)。\n\n### 镜像题目\n\n88、215"}}]);