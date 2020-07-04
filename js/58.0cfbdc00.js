(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{713:function(n,t){n.exports='### flex + margin: auto\n\n父节点使用 `display: flex`, 子节点使用 `margin: auto`\n\n```html\n<style>\n  .flex {\n    display: flex;\n    width: 300px;\n    height: 300px;\n    background: #ccc;\n    margin-bottom: 5px;\n  }\n  .flex p {\n    margin: auto;\n  }\n</style>\n<div class="flex">\n  <p>content</p>\n</div>\n```\n\n### flex 结合 justify-content、align-items\n\n```html\n<style>\n  .flex2 {\n    display: flex;\n    width: 300px;\n    height: 300px;\n    background: #ccc;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 5px;\n  }\n</style>\n<div class="flex2">\n  <p>content</p>\n</div>\n```\n\n### 绝对定位 + 相对定位\n\n```html\n<style>\n  .position {\n    position: relative;\n    width: 300px;\n    height: 300px;\n    background: #ccc;\n  }\n  .position p {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n</style>\n<div class="position">\n  <p>content</p>\n</div>\n```'}}]);