(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{858:function(n,t){n.exports="### title\n\nGiven an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.\n\nNote:\n\nThe solution set must not contain duplicate quadruplets.\n\nExample:\n\n```js\nGiven array nums = [1, 0, -1, 0, -2, 2], and target = 0.\n\nA solution set is:\n[\n  [-1,  0, 0, 1],\n  [-2, -1, 1, 2],\n  [-2,  0, 0, 2]\n]\n```\n\n### Analyze\n\n题目 [15](https://github.com/MuYunyun/blog/blob/master/BasicSkill/LeetCode/15.3Sum/README.md) 的加强版, 唯一区别是定义的指针数量增加了, 仍然需要注意`解的去重`。\n\n```js\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[][]}\n */\nvar fourSum = function(nums, target) {\n  const result = []\n  if (nums.length < 4) return result\n  const sortSum = nums.sort((n1, n2) => n1 - n2)\n  const length = sortSum.length\n  for (let i = 0; i < length - 3; i++) {\n    if (i === 0 || nums[i] > nums[i - 1]) {\n      let l = i + 1\n      let m = l + 1\n      while (l < length - 2) {\n        let r = length - 1\n        if (l === i + 1 || nums[l] > nums[l - 1]) {\n          while (m < length - 1 && m < r) {\n            let tmpArr = []\n            const sum = nums[i] + nums[l] + nums[m] + nums[r]\n            if (sum === target) {\n              tmpArr.push(nums[i])\n              tmpArr.push(nums[l])\n              tmpArr.push(nums[m])\n              tmpArr.push(nums[r])\n              result.push(tmpArr)\n              m++\n              r--\n              while (nums[m] === nums[m - 1]) {\n                m++\n              }\n              while (nums[r] === nums[r + 1]) {\n                r--\n              }\n            } else if (sum < target) {\n              m++\n            } else if (sum > target) {\n              r--\n            }\n          }\n        }\n        l++\n        m = l + 1\n      }\n    }\n  }\n  return result\n}\n\nfourSum([1, 0, -1, 0, -2, 2], 0)\n```\n\n![](http://with.muyunyun.cn/9e8e7033246cfea3940af4fb03b3a363.jpg-400)\n\n假设数组的长度为 n, 算法复杂度估计为 `(n - 3) * (等差数列)` 即为 O(n^2)\n\n### Sister Title\n\n15、16"}}]);