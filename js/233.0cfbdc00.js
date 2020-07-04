(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{888:function(n,r){n.exports="### title\n\n假设按照升序排序的数组在预先未知的某个点上进行了旋转。\n\n( 例如, 数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。\n\n搜索一个给定的目标值, 如果数组中存在这个目标值, 则返回它的索引, 否则返回 -1 。\n\n你可以假设数组中不存在重复的元素。\n\n你的算法时间复杂度必须是 O(log n) 级别。\n\n示例 1:\n\n```\n输入: nums = [4,5,6,7,0,1,2], target = 0\n输出: 4\n```\n\n示例 2:\n\n```\n输入: nums = [4,5,6,7,0,1,2], target = 3\n输出: -1\n```\n\n### analyze\n\n思路: 考虑使用二分法? 这题难度觉得超纲了。然后再想。\n\n```js\n// 这道题卡在如何确定返回的指标\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function (nums, target) {\n  const length = nums.length\n  const middle = Math.floor(length / 2)\n  const leftArr = nums.slice(0, middle)\n  const rightArr = nums.slice(middle, length)\n\n  if (isOrder(leftArr)) {\n    sortByDivided(leftArr, target)\n  } else {\n    search(leftArr, target)\n  }\n\n  if (isOrder(rightArr)) {\n    sortByDivided(rightArr, target)\n  } else {\n    search(rightArr, target)\n  }\n};\n\nvar isOrder = function(arr) {\n  return arr[0] < arr[arr.length - 1]\n}\n\nvar sortByDivided = function(arr, target) {\n  const length = arr.length\n  let left = 0\n  let right = length\n  let middle\n\n  while (left <= right) {\n    middle = Math.floor((left + right) / 2)\n    if (target > arr[middle]) {\n      left = middle + 1\n    } else if (target < arr[middle]) {\n      right = middle - 1\n    } else if (target === arr[middle]) {\n      return middle\n    }\n  }\n\n  return false\n}\n```"}}]);