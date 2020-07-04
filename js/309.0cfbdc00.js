(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{964:function(e,n){e.exports="### 在 React 中构建移动端优先的 web 动画\n\n移动端优先动画是指在移动设备上开发的, 旨在在移动浏览器而非桌面浏览器的上下文中工作的动画。它有着类似原生 App 的交互体验, 尤其是体贴的手势交互, 同时即使在中低档设备上其也具有不错的流畅体验。\n\n### Types of gestures\n\n* Navigational gestures\n  * Tap\n  * Scroll and pan\n  * Drag\n  * Swipe\n  * Pinch\n* Action gestures\n  * Tap\n  * Long press\n  * Swipe\n* Transform gestures\n  * Double tap\n  * Pinch\n  * Compound gestures\n\n> [Types of gestures](https://material.io/design/interaction/gestures.html#types-of-gestures)\n\n### 难点罗列\n\n* scroll、swipe-to-refresh 会受到浏览器默认行为干扰;\n* 触摸反应迟钝, 没有直接操作的感觉;\n* 反物理直觉;\n* 兼容中、低设备;\n\n### 框架方案\n\nThe way to take is usually `an animation library` with `a gesture hooks`.\n\n* [Framer](https://github.com/koenbok/Framer)\n* [react spring](https://github.com/react-spring/react-spring) + [react-use-gesture](https://github.com/react-spring/react-use-gesture)\n* animation library([anime](https://github.com/juliangarnier/anime)) + [react-swipeable](https://github.com/dogfessional/react-swipeable)\n* animation library([GSAP](https://github.com/greensock/GSAP)) + [Hammer.js](https://github.com/hammerjs/hammer.js/)\n\n### Some Principles\n\n* `Immediate Response`: If not response immediately, it feels super disconnected. [demo](https://mobile-first-animation.netlify.com/21)\n  * Carousel 组件, 目前 Tab 的滑动存在缺陷;\n* `Scroll Decay`: The concepts of scroll decay can help us decide how our UIs should respect to users interaction. [demo](https://mobile-first-animation.netlify.com/23)\n  * `-webkit-overflow-scrolling: touch`;(only used in ios > 5, but not success)\n  * Picker/DatePicker 组件;\n* `Rubberbanding`\n  * PopOver 组件;\n\n### Touch cancellation\n\n* Use the `touch-action` CSS property to disable default browser behaviors with precision.\n\nuse touch-action before:\n\n![](http://with.muyunyun.cn/2f284758868304dabad94d2a25500562.gif)\n\nuse touch-action after:\n\n![](http://with.muyunyun.cn/a458a78d287e08627f4dd6b1502fc33e.gif)\n\n* [Interactive touch-action demo](https://www.chenhuijing.com/touch-action/)\n* [Mozilla introduction to touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)\n\n### Passive event listeners\n\nIf you decide not to cancel the scroll, you can set the **passive** in the addEventListener. If that, it can enable the browsers to scroll the page immediately.\n\n* [passive-event-listeners](https://developers.google.com/web/updates/2016/06/passive-event-listeners)\n- [ ] [Passive events listener explainer](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)\n\n### Scroll\n\nProblem 1: scroll chaining\n\nWhen the user reachs a 'scroll boundary', the content behind the drawer or modal starts scrolling!\n\n![](https://developers.google.com/web/updates/images/2017/11/overscroll-behavior/drawer-scroll.mp4?hl=zh_cn)\n\n![](http://with.muyunyun.cn/5ad52dbc5716fb92b823898557cc94fa.gif)\n\n* [overscroll-behavior](https://drafts.csswg.org/css-overscroll/)\n  * auto: default;\n  * contain: prevent scroll chaining, keep the overflow effects within the node self;\n  * none: prevent scroll chaining, prevent overflow effects within the node self.\n\n![](http://with.muyunyun.cn/130f116b88477fba5725033e4245927a.jpg)\n\n> [Overscroll behavior](https://developers.google.com/web/updates/2017/11/overscroll-behavior): read Introducing overscroll-behavior\n\n### resource links\n\n* [Apple's \"Designing Fluid Interfaces\" talk](https://developer.apple.com/videos/play/wwdc2018/803/)\n* [Implementation of iOS animation principles](https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5)\n* [Progressive Web Animations | Alexandra Holachek](https://www.youtube.com/watch?v=laPsceJ4tTY&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=21)\n\n### Spring Animations\n\n* [springs in animations](https://github.com/jenox/UIKit-Playground/tree/master/01-Demystifying-UIKit-Spring-Animations)\n\n![](http://with.muyunyun.cn/21585e988e682457131948346fc8949d.jpg)\n\n#### Springs & Gestures\n\n- [ ] [In-depth look at projection](https://medium.com/ios-os-x-development/gestures-in-fluid-interfaces-on-intent-and-projection-36d158db7395): 以借助这里的 Projection 公式来优化改进\n- [ ] [In-depth exploration of momentum scrolling](https://ariya.io/2013/08/javascript-kinetic-scrolling-part-1)\n\n#### Touch on the web\n\n- [ ] [Google introduction to touch on the web](https://developers.google.com/web/fundamentals/design-and-ux/input/touch)\n- [ ] [Mozilla introduction to pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)\n"}}]);