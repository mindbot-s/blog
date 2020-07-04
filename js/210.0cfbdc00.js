(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{865:function(n,t){n.exports='### 205. Isomorphic Strings\n\nGiven two strings s and t, determine if they are isomorphic.\n\nTwo strings are isomorphic if the characters in s can be replaced to get t.\n\nAll occurrences of a character must be replaced with another character while preserving the order of characters. `No two characters may map to the same character` but `a character may map to itself`.\n\nExample 1:\n\n```js\nInput: s = "egg", t = "add"\nOutput: true\n```\n\nExample 2:\n\n```js\nInput: s = "foo", t = "bar"\nOutput: false\n```\n\nExample 3:\n\n```js\nInput: s = "paper", t = "title"\nOutput: true\n```\n\nNote:\nYou may assume both s and t have the same length.\n\n### 题解\n\n方法一: 字典哈希\n\n* 遍历字符串, 使用`字典 map` 构建 s 中字符串与 t 中字符串(以及 t 中字符串与 s 中字符串)的映射关系;\n  * 若发现存在`一对多`的情况, 则 s 与 t 不是同构的;\n* 遍历结束, 则 s 与 t 是同构的;\n\n> 一对多: 比如 s 为 \'aa\', t 为 \'ab\', 此时 ’a\' 字符就对应了 \'a\'、\'b\' 两个字符, 即为一对多。\n\n```js\n/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isIsomorphic = function(s, t) {\n  const mapS = new Map()\n  const mapT = new Map()\n  for (let i = 0; i < s.length; i++) {\n    const getS = mapS.get(s[i])\n    const getT = mapT.get(t[i])\n    if ((getS && getS !== t[i]) || (getT && getT !== s[i])) {\n      return false\n    }\n    mapS.set(s[i], t[i])\n    mapT.set(t[i], s[i])\n  }\n\n  return true\n}\n```\n\n方法二: 判断 s 与 t 字符串中字符出现的第一个位置。(针对本题的巧妙解法, 不过推荐优先掌握方法一)\n\n```js\n/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isIsomorphic = function(s, t) {\n  for (let i = 0; i < s.length; i++) {\n    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {\n      return false\n    }\n  }\n  return true\n};\n```\n\n### 相关题目\n\n202、242、290、349、350、451'}}]);