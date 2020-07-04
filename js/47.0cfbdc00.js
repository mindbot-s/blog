(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{702:function(n,t){n.exports='### font 属性\n\n使用 font 属性时: `font-size` 以及 `font-family` 属性在尾部必填而且必须得照这个顺序。其它可选属性还有: font-weight、font-style 等。此外还能使用 line-height 属性, 使用 line-height 的格式为 font-size/line-height。\n\n### 和字体相关的 css\n\n* 连字符断行: `hyphens: auto`\n* 插入换行: 替代 `<br />` 可以使用如下使用:\n\n```css\n.demo::after {\n  content: \'/A\';    /* 表示 Unicode 里的 `0x000A`/ */\n  white-space: pre; /* 保留空格 */\n}\n```\n\n### 字体单位\n\n* 相对视窗\n  * `1vw`: 视窗宽度的 1/100, 100 vw 等于整个视窗宽度;\n  * `1vh`: 视窗高度的 1/100, 100 vh 等于整个视窗高度;\n  * `1vmin`: 取视窗宽度和视窗高度最小值的 1/100;\n  * `1vmax`: 取视窗宽度和视窗高度最大值的 1/100;\n* 相对 `font-size`\n  * `rem`: 相对 `html` 中的 `font-size` 进行转换(如果根元素的 font-size 小于 12px 则以 12px 来计算);\n  * `em`: 相对父元素(或者自己层级)的 `font-size` 进行转换; font-size: 1em 等价于 font-size: 100%;\n\n`px` 与 `vw` 单位间的转换:\n\n```js\n1vw = document.documentElement.clientWidth(px) / 100\n(100/document.documentElement.clientWidth)vw = 1px\n```\n\n#### rem 的使用\n\n通常将 1rem 设置为 100px, (经过测试 10px/1px 也是可以的)\n\n<details>\n  <summary>相关测试</summary>\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<style>\n\t\thtml {\n\t\t\tfont-size: calc(100vw / 375)\n\t\t}\n\t</style>\n</head>\n\n<body>\n\t<div class="test" style="font-size: 16rem;margin-top: 16rem;padding: 16rem">测试</div>\n</body>\n\n</html>\n```\n</details>\n\n```css\nhtml {\n  font-size: calc(100vw / 3.75) /* 表示在 1 dpr 屏上, 此时 1 rem 相当于是 100px */\n}\n```\n\n- [ ] 阅读到文本行的斑马条纹'}}]);