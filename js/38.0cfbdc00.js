(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{693:function(n,t){n.exports="### 数量限定符\n\n| 数量限定符 |                                           解释                                            |\n| :--------: | :---------------------------------------------------------------------------------------: |\n|    `x+`    |                                         1 或多个                                          |\n|    `x*`    |                                         0 或多个                                          |\n|    `x?`    |                                         0 或 1 个                                         |\n|   `x{n}`   |                                           n 个                                            |\n|  `x{n,}`   |                                         至少 n 个                                         |\n| `x{n, m}`  | n 至 m 个, 遵循贪婪原则, 会尽可能匹配多个; 如果在后面加个 ? (如 x{n, m}?), 遵循非贪婪原则 |\n\n> 贪婪可以理解成从后往前遍历, 非贪婪可以理解为从前向后遍历\n\n### 字符限定符\n\n| 字符限定符 |                       解释                        |\n| :--------: | :-----------------------------------------------: |\n|    `\\d`    |              匹配一个数字字符, [0-9]              |\n|    `\\D`    |            匹配一个非数字字符, [^0-9]             |\n|    `\\w`    |  匹配单词字符(包括数字下划线在内), [0-9A-Za-z_]   |\n|    `\\W`    | 匹配非单词字符(包括数字下划线在内), [^0-9A-Za-z_] |\n|    `\\s`    |         匹配空白字符(空格、回车、制表符)          |\n|    `\\S`    |                  匹配非空白字符                   |\n|    `.`     |         匹配任何单个字符(不包括空白字符)          |\n\n根据使用方法可以进行如下分类:\n\n|     使用      |   解释   |\n| :-----------: | :------: |\n| `[0-9a-zA-Z]` | 范围字符 |\n|   `[abcd]`    | 任意字符 |\n|   `[^a-z]`    | 范围字符 |\n\n### 定位符\n\n| 定位符 |    解释    |\n| :----: | :--------: |\n|  `^`   |  开头标识  |\n|  `$`   |  结尾标识  |\n|  `\\b`  |  单词边界  |\n|  `\\B`  | 非单词边界 |\n\n### 转义符\n\n`\\`: 用于匹配某些特殊字符\n\n> /^(\\d)\\1+$/.test(333), 比如这里的 \\1 表示第一个括号里的值, 达到判断重复数字的效果\n\n### 选择匹配符\n\n`|`: 可以匹配多个规则\n\n### 特殊用法\n\n|   特殊用法    |              解释              |\n| :-----------: | :----------------------------: |\n| `?=` 正向预查 |   匹配以指定内容结束的字符串   |\n| `?!` 负向预查 | 匹配不是以指定内容结束的字符串 |\n|      `?`      | 不把选择匹配符的内容放到缓冲区 |\n\n### 正则表达式在 JavaScript 下的使用方法\n\n在 JavaScript 下使用正则表达式, 有两种方法:\n\n第一种方法: 使用 `RegExp` 类\n\n提供的方法有: (正则表达式在前面)\n\n* `test(str)`: 在字符串匹配是否有匹配模式的字符串, 返回 `true/false`\n* `exec`: 如果正则表达式中有子表达式, 使用 `exec` 方法, 返回 `result[0] = 匹配结果, result[1] = 子表达式 1 的匹配结果 ……`\n\n第二种方法是: 使用 `String` 类\n\n提供的方法有: (正则表达式在后面)\n\n* `search` 返回匹配模式的字符串出现的位置, 如果没有, 返回 -1;\n* `match` 返回匹配模式匹配到的字符串, 如果有, 返回数组, 无, 返回 null;\n* `replace` 将匹配模式匹配到的字符串进行替换;\n* `split` 将字符串已匹配模式为分隔符进行字符串分隔, 返回数组;\n\n### 分析\n\n```js\n('&ab=').match(/([^&]+)=/g) // [\"ab=\"]\n```\n\n分析: ^ 一般表示开头, 但是注意此处中括号里的 `^` 表示非\n\n### update\n\n[?<=](https://github.com/tc39/proposal-regexp-lookbehind): now support match from right to left.\n"}}]);