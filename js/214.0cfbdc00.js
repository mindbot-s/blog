(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{869:function(n,t){n.exports="### 题目\n\n在`未排序的数组中`找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。\n\n示例 1:\n\n```js\n输入: [3,2,1,5,6,4] 和 k = 2\n输出: 5\n```\n\n示例 2:\n\n```js\n输入: [3,2,3,1,2,4,5,5,6] 和 k = 4\n输出: 4\n```\n\n说明:\n\n你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。\n\n### 解题\n\n解法一: 排序。空间复杂度为 O(NlogN), 空间复杂度为 O(1)\n\n```js\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar findKthLargest = function(nums, k) {\n  nums.sort((r1, r2) => r2 - r1)\n  return nums[k - 1]\n}\n```\n\n解法二: 快速选择\n\n思路: 本方法大致上与快速排序相同。简便起见，注意到第 k 个最大元素也就是升序排序后下标为 `N - k` 的元素。递归使用[划分算法](https://github.com/MuYunyun/blog/blob/master/BasicSkill/algorithm/划分算法.md)。\n\n* 使用划分算法, 定义一个枢纽值, 并将其放到指定位置(小于该枢纽值的都在其左边, 大于该枢纽值的都在其右边);\n* 比较枢纽值的下标 position 与 N - k 的大小关系\n\n![](http://with.muyunyun.cn/503d3b6311c2f401a50bcdb5c57f0f52.jpg)\n\n> 算法复杂度为 O(n)。计算: `n + (1/2) * n + (1/4) * n + ... + (1/2)^n * n`, 经等比数列求和为 `2n - 2n / 2^n`, 当 n 趋于无穷大时, 结果趋近为 2n。\n\n```js\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar findKthLargest = function(nums, k) {\n  const length = nums.length\n  return quickSelect(0, length - 1, length - k, nums)\n}\n\nvar quickSelect = function(left, right, kthSmall, arr) {\n  const position = partition(arr, left, right)\n  if (position === kthSmall) {\n    return arr[position]\n  } else if (position < kthSmall) {\n    return quickSelect(position + 1, right, kthSmall, arr)\n  } else if (position > kthSmall) {\n    return quickSelect(left, position - 1, kthSmall, arr)\n  }\n}\n\n/* 分区算法 */\nfunction partition(nums, left, right) {\n  const pivot = nums[left] // 枢纽值\n  let pos = left           // 用来记住最后枢纽值 pivot 应该置于的位置\n  for (let i = left + 1; i <= right; i++) {\n    if (nums[i] < pivot) {\n      pos++\n      swap(nums, pos, i)\n    }\n  }\n  swap(nums, pos, left)\n  return pos\n}\n\n/* 交换位置\n  nums 数组, a, b 为下标\n*/\nvar swap = function(nums, a, b) {\n  const tmp = nums[a]\n  nums[a] = nums[b]\n  nums[b] = tmp\n}\n```\n\n### 镜像题目\n\n75"}}]);