(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{682:function(n,e){n.exports="这是一套基本的由浅入深考察前端知识体系的清单, 自测用:\n\n### CSS\n\n* 什么是 CSS 盒模型\n\n```\n包含 content, margin, border, padding\n```\n\n* 标准模型和 IE 模型有什么不同\n\n```\n是否将 padding 和 border 算进 content 的 width 中, 即在 IE 模型下, padding 和 border 会挤压 content 的空间\n```\n\n* CSS 如何设置这两种模型\n\n```\nbox-sizing: content-box; // 标准模型(默认)\nbox-sizing: border-box;  // IE模型\n```\n\n* JS 如何设置获取盒模型对应的宽和高\n\n```\ndom.style.width             // 只支持内联样式\ndom.currentStyle.width      // 只有 IE 支持\nwindow.getComputedStyle\ndom.getBoundingClientRect\n```\n\n* 如何实现垂直居中\n\n见 [垂直居中](https://github.com/MuYunyun/blog/blob/master/BasicSkill/css/%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.html)\n\n* Flex 布局居中\n\n```\njustify-content: center； // 水平居中\nalign-item: center;       // 垂直居中\n```\n\n* BFC 的基本概念\n\n* BFC 的原理\n\n* 如何创建 BFC\n\n前三个问题的解答看: [聊聊 BFC](https://github.com/MuYunyun/blog/blob/master/BasicSkill/css/聊聊BFC.md), 对如何创建 BFC 这个问题答主水平有限, 只实验了 overflow:hidden 这个属性, 个人建议回答好 BFC 原理即可。\n\n### DOM 事件类\n\n* DOM 事件的级别了解吗\n\n```\nDOM0: dom.onClick\nDOM2: dom.addEventListener('click', () => {}, false)\nDOM3: 在 1 的基础上加了鼠标键盘事件\n```\n\n> dom.addEventListener() 的第二个参数能跟 `{ handleEvent: () => {} }`\n\n* DOM 事件模型了解吗\n\n```\n存在冒泡阶段和捕获阶段\n```\n\n* DOM 事件流了解吗\n\n```\n事件通过捕获到目标阶段, 目标阶段再进行冒泡\n```\n\n* 描述 DOM 事件捕获的具体流程\n\n```\n事件捕获 => window => document => html => body => 目标元素\n```\n\n* 讲一下事件委托(事件代理)\n\n```\n将绑定在子元素的事件绑定到父元素上, 然后可以通过 e.target 取到目标节点\n```\n\n* 自定义事件了解吗\n\n```js\nvar event = new Event('custom')\ndom.addEventListener('custom', () => {})\ndom.dispatchEvent(event)\n```\n\n### 类型转换\n\n* 了解显式转换、隐式转换吗？\n\n```\n显示转换:\n隐式转换: 四则运算、if 语句、native 调用(console.log())\n```\n\n* 了解显式转换的过程吗\n\n### HTTP 相关\n\n> 见 https://github.com/MuYunyun/blog/blob/master/BasicSkill/http/http.md\n\n### 原型链类\n\n* 创建对象有几种方法\n\n* 聊聊原型、构造函数、实例、原型链\n\n* instanceof 的原理了解吗\n\n* new 运算符的原理了解吗\n\n```js\nconst new2 = function(func) {\n  const o = Object.create(func.prototype)\n  const result = func.call(o)\n  if (typeof(result) === 'object') {\n    return result\n  } else {\n    return o\n  }\n}\n```\n\n### 面向对象类\n\n* 如何进行类的声明\n\n* 如何生成实例\n\n* 如何实现继承\n\n* 各继承方式的优缺点\n\n### 通信类\n\n* 什么是同源策略及限制\n\n* 如何创建 Ajax\n\n```js\nconst xhr = new HttpRequest()\n\nxhr.open('Get', '/abc', false)\nxhr.onreadystatechange = function() {\n  if (xhr.readyState === 4) {\n    if (xhr.status === 200 || xhr.status === 304) {\n      console.log(xhr.responseText)\n    }\n  }\n}\n\nxhr.send(null)\n```\n\n甚至可以结合 Promise 与 HttpRequest 来封装 fetch。\n\n```js\nfunction fetch(url) {\n  return new Promise((resolve, reject) => {\n    var xhr = new XMLHttpRequest()\n    xhr.open('GET', url, true)\n    xhr.onreadystatechange = function() {\n      if (this.readyState === 4 && this.status === 200) {\n        resolve(this.responseText)\n      } else {\n        reject(new Error(this.status))\n      }\n    }\n    xhr.send(null)\n  })\n}\n\nfetch('/post.json')\n  .then((fulfilled) => {\n    console.log(fulfilled)\n  })\n  .catch((rejected) => {\n    console.log(rejected)\n  })\n```\n\n* 跨域通信的几种方式\n\n### 安全类\n\n* 了解 CSRF 吗 ？ 如何防止 CSRF\n\n* 了解 XSS 吗 ？ 如何防止 XSS\n\n* session 与 token 有什么区别\n\n```\nsession(会话) 存放在服务端, 每次打开网站就产生一个 session, 注销网站, session 就会销毁\ntoken(令牌) 通常是由密码、时间戳混合盐算法一起生成\n```\n\n> 既然聊到了 cookie 的大小, 另外两个相关的\n\n### 渲染机制类\n\n* 什么是 DOCTYPE 及作用\n\n* 浏览器解析和渲染过程\n\n* 重排 Reflow\n\n```\n1.增减 dom 元素\n2.元素的位置发生移动\n3.元素尺寸(外间距、内间距、长宽)发生改变\n4.浏览器的窗口大小改变\n```\n\n* 重绘 Repaint\n\n```\n1.重排必然会导致重绘\n2.重绘不一定重排, 比如元素的颜色发生变化, 只会发生重绘\n```\n\n### 运行机制类\n\n* 如何理解 JS 的单线程\n\n没办法同时做两件事情\n\n* 什么是 Event Loop\n\n### 页面性能类\n\n* 提升页面性能的方法有哪些"}}]);