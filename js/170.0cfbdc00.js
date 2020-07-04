(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{825:function(n,o){n.exports="### 组合模式\n\n* 组合模式在对象间形成`树形结构`;\n* 组合模式中基本对象和组合对象被`一致对待`;\n* 无须关心对象有多少层, 调用时只需在根部进行调用;\n\n### demo1 —— 宏命令\n\n想象我们现在手上有个万能遥控器, 当我们回家, 按一下开关, 下列事情将被执行:\n\n```\n1. 煮咖啡\n2. 打开电视、打开音响\n3. 打开空调、打开电脑\n```\n\n我们把任务划分为 3 类, 效果图如下:\n\n![](http://with.muyunyun.cn/9c87ce835515f3d9b60a86a0f28897d9.jpg-400)\n\n接着看看结合了[命令模式](https://github.com/MuYunyun/blog/blob/master/Basic%20Skill/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/命令模式.md)和组合模式的具体实现:\n\n```js\nconst MacroCommand = function() {\n  return {\n    lists: [],\n    add: function(task) {\n      this.lists.push(task)\n    },\n    excute: function() { // ①: 组合对象调用这里的 excute,\n      for (let i = 0; i < this.lists.length; i++) {\n        this.lists[i].excute()\n      }\n    },\n  }\n}\n\nconst command1 = MacroCommand() // 基本对象\n\ncommand1.add({\n  excute: () => console.log('煮咖啡') // ②: 基本对象调用这里的 excute,\n})\n\nconst command2 = MacroCommand() // 组合对象\n\ncommand2.add({\n  excute: () => console.log('打开电视')\n})\n\ncommand2.add({\n  excute: () => console.log('打开音响')\n})\n\nconst command3 = MacroCommand()\n\ncommand3.add({\n  excute: () => console.log('打开空调')\n})\n\ncommand3.add({\n  excute: () => console.log('打开电脑')\n})\n\nconst macroCommand = MacroCommand()\nmacroCommand.add(command1)\nmacroCommand.add(command2)\nmacroCommand.add(command3)\n\nmacroCommand.excute()\n\n// 煮咖啡\n// 打开电视\n// 打开音响\n// 打开空调\n// 打开电脑\n```\n\n可以看出在组合模式中基本对象和组合对象被一致对待, 所以要保证基本对象(叶对象)和组合对象具有一致方法。\n\n### demo2 —— 扫描文件夹\n\n扫描文件夹时, 文件夹下面可以为另一个文件夹也可以为文件, 我们希望统一对待这些文件夹和文件, 这种情形适合使用组合模式。\n\n```js\nconst Folder = function(folder) {\n  this.folder = folder\n  this.lists = []\n}\n\nFolder.prototype.add = function(resource) {\n  this.lists.push(resource)\n}\n\nFolder.prototype.scan = function() {\n  console.log('开始扫描文件夹: ', this.folder)\n  for (let i = 0, folder; folder = this.lists[i++];) {\n    folder.scan()\n  }\n}\n\nconst File = function(file) {\n  this.file = file\n}\n\nFile.prototype.add = function() {\n  throw Error('文件下不能添加其它文件夹或文件')\n}\n\nFile.prototype.scan = function() {\n  console.log('开始扫描文件: ', this.file)\n}\n\nconst folder = new Folder('根文件夹')\nconst folder1 = new Folder('JS')\nconst folder2 = new Folder('life')\n\nconst file1 = new File('深入React技术栈.pdf')\nconst file2 = new File('JavaScript权威指南.pdf')\nconst file3 = new File('小王子.pdf')\n\nfolder1.add(file1)\nfolder1.add(file2)\n\nfolder2.add(file3)\n\nfolder.add(folder1)\nfolder.add(folder2)\n\nfolder.scan()\n\n// 开始扫描文件夹:  根文件夹\n// 开始扫描文件夹:  JS\n// 开始扫描文件:  深入React技术栈.pdf\n// 开始扫描文件:  JavaScript权威指南.pdf\n// 开始扫描文件夹:  life\n// 开始扫描文件:  小王子.pdf\n```"}}]);