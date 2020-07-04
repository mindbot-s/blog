(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{842:function(n,e){n.exports='### 126. Word Ladder II\n\nGiven two words (beginWord and endWord), and a dictionary\'s word list, find `all shortest transformation` sequence(s) from beginWord to endWord, such that:\n\nOnly one letter can be changed at a time\nEach transformed word must exist in the word list. Note `that beginWord is not a transformed word`.\n\nNote:\n\n* `Return an empty list` if there is no such transformation sequence.\n* All words `have the same length`.\n* All words `contain only lowercase alphabetic characters`.\n* You may assume `no duplicates` in the word list.\n* You may assume beginWord and endWord are `non-empty` and are `not the same`.\n\nExample 1:\n\n```js\nInput:\nbeginWord = "hit",\nendWord = "cog",\nwordList = ["hot","dot","dog","lot","log","cog"]\n\nOutput:\n[\n  ["hit","hot","dot","dog","cog"],\n  ["hit","hot","lot","log","cog"]\n]\n```\n\nExample 2:\n\n```js\nInput:\nbeginWord = "hit"\nendWord = "cog"\nwordList = ["hot","dot","dog","lot","log"]\n\nOutput: []\n\n// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.\n```\n\n### Analyze\n\n暂时跳过此题, 目前卡在 21/39 测试用例中, 超过时间限制;\n\n```js\n/**\n * @param {string} beginWord\n * @param {string} endWord\n * @param {string[]} wordList\n * @return {string[][]}\n */\nvar findLadders = function(beginWord, endWord, wordList) {\n  const result = []\n  if (wordList.indexOf(endWord) === -1) return result\n  const queue = []\n  const visitedObj = {\n    beginWord: {\n      visited: true,\n      visitedParent: null\n    }\n  }\n  queue.push({ word: createNode(beginWord), level: 1 })\n  let levelLimit = null\n  while (queue.length > 0) {\n    const { word, level } = queue.shift()\n    if (levelLimit && level >= levelLimit) return result\n    // if the value and it\'s parent value are visited, jump this loop;\n    if (visitedObj[word.val] && visitedObj[word.val].visited\n    && word.parent === visitedObj[word.val].visitedParent) continue\n    for (let i = 0; i < wordList.length; i++) {\n      const isDiffOneWord = ifDiffOneWord(word.val, wordList[i])\n      if (isDiffOneWord) {\n        const newNode = createNode(wordList[i])\n        newNode.parent = word\n        if (wordList[i] === endWord) {\n          result.push(convertTreeToArr(newNode, beginWord))\n          levelLimit = level + 1\n        }\n        queue.push({ word: newNode, level: level + 1 })\n        visitedObj[word.val] = {\n          visited: true,\n          visitedParent: word\n        }\n      }\n    }\n  }\n  return result\n}\n\n// judge if the targetWord has one different word from the comparedWord;\nfunction ifDiffOneWord(targetWord, comparedWord) {\n  let wordLength = targetWord.length\n  let diffNum = 0\n  for (let i = 0; i < wordLength; i++) {\n    if (targetWord[i] !== comparedWord[i]) {\n      diffNum++\n    }\n    if (diffNum > 1) return false\n  }\n  if (diffNum === 1) {\n    return true\n  } else {\n    return false\n  }\n}\n\n/**\n * create new Node\n */\nfunction createNode(val) {\n  return {\n    val,\n    parent: null\n  }\n}\n\n/**\n * convert tree to arr\n */\nfunction convertTreeToArr(tree, beginWord) {\n  const result = []\n  while (tree.parent) {\n    result.unshift(tree.val)\n    tree = tree.parent\n  }\n  result.unshift(beginWord)\n  return result\n}\n```\n\n### Similar Title\n\n279、127、126'}}]);