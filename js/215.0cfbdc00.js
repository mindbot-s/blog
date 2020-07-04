(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{870:function(n,t){n.exports="### Contains Duplicate\n\nGiven an array of integers, find if the array contains any duplicates.\n\nYour function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.\n\nExample 1:\n\n```js\nInput: [1,2,3,1]\nOutput: true\nExample 2:\n\nInput: [1,2,3,4]\nOutput: false\nExample 3:\n\nInput: [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n```\n\n### Solved\n\n```js\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n  const result = [...new Set(nums)]\n  return result.length !== nums.length\n}\n```\n\n### Sister Title\n\n219、220\n"}}]);