(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{959:function(n,t){n.exports="### SearchBar\n\n在使用 css 的动画属性 `transition` 时, 如果变化前后以下属性改变会使动画失效。`display/text-align`; 所以要维持动画的生效, 保留了 `text-align: center` 属性, 让搜索字样居中。如下图是动画前后的效果。\n\n![](http://with.muyunyun.cn/cb02d781a8437bb43eea1581d41e6c87.jpg)\n\n![](http://with.muyunyun.cn/004c6594536786fb1bb57e3df5524831.jpg)\n\n受 `text-align: center` 影响, 为了不让 🔍 icon 居中, 这个时候使用 `visibility: hidden` 来占位;\n\n![](http://with.muyunyun.cn/9366ca8f6e6f6d7c85d34ca893af131a.jpg)\n\n### 几个事件钩子的调用先后顺序\n\n* `onBlur`: 失焦\n* `onClear`: 点击清除图标触发清除\n* `onFocus`: 聚焦\n\n![](http://with.muyunyun.cn/d188c846ffbd8c79646a940c352686d5.jpg)\n\n点击叉号的时候, 因为叉号不在 `input` 输入框内, 所以首先执行的是 `onBlur`, 此时失去焦点, 后续执行不了叉号上的 `handleClear` 逻辑。解决方法如下:\n\n```js\nhandleBlur = (e: React.FocusEvent<HTMLInputElement>) => {\n  const { onBlur } = this.props\n  onBlur(e)\n\n  setTimeout(() => {\n    // 如果点击叉号, 执行到这里时候 document.activeElement === this.inputRef\n    if (document.activeElement !== this.inputRef) {\n      this.setState({ focus: false })\n    }\n  }, 20)\n}\n\n/* 清空输入并重新聚焦 */\nhandleClear = () => {\n  const { onClear, onChange } = this.props\n  onChange && onChange('')\n  onClear('')\n  this.focus()\n}\n\nfocus = () => {\n  if (this.inputRef) {\n    this.inputRef.focus()\n  }\n}\n```\n\n### 解决点击 🔍 不 blur 仍然保持聚焦的效果\n\n![](http://with.muyunyun.cn/afa95e394ae7ff8b1b180b0407acf424.jpg)\n\n当点击搜索 `icon` 的时候, 为了仍保留 `input` 的聚焦的效果, 使用 `z-index` 对 `input` 元素做如下操作。\n\n```css\n.demo {\n  position: absolute;\n  z-index: 2;\n  background-color: transparent;\n}\n```\n"}}]);