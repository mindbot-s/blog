(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{909:function(n,t){n.exports='### title\n\nGiven an array of strings, group anagrams together.\n\nExample:\n\n```js\nInput: ["eat", "tea", "tan", "ate", "nat", "bat"],\nOutput:\n[\n  ["ate","eat","tea"],\n  ["nat","tan"],\n  ["bat"]\n]\n```\n\nNote:\n\nAll inputs will be in lowercase.\nThe order of your output does not matter.\n\n### analyze\n\n```js\n/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function (strs) {\n  const tmpObj = {}\n\n  for (let i = 0; i < strs.length; i++) {\n    const sortStr = strs[i].split(\'\').sort().join(\'\')\n    if (tmpObj[sortStr]) {\n      tmpObj[sortStr].push(strs[i])\n    } else {\n      tmpObj[sortStr] = [strs[i]]\n    }\n  }\n\n  const result = []\n\n  const keyArr = Object.keys(tmpObj)\n  for (let i = 0; i < keyArr.length; i++) {\n    result.push(tmpObj[keyArr[i]])\n  }\n\n  return result\n}\n```'}}]);