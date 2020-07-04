(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{715:function(t,n){t.exports='> 本文是水平布局解决方案的姊妹篇\n\n### 题目\n\n题目: 假设宽度已知, 请写出三栏布局, 其中上、下栏高度各为 `100` px, 中间自适应。\n\n### position 布局\n\n```html\n<body>\n\t<style>\n\t\thtml, body, .box {\n\t\t\theight: 100%;\n\t\t}\n\t\t.box {\n\t\t\tposition: relative;\n\t\t}\n\t\t.head {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\ttop: 0;\n\t\t\theight: 100px;\n\t\t\tbackground: red;\n\t\t}\n\t\t.middle {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\ttop: 100px;\n\t\t\tbottom: 100px;\n\t\t\tbackground: yellow;\n\t\t}\n\t\t.bottom {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tbottom: 0;\n\t\t\theight: 100px;\n\t\t\tbackground: red\n\t\t}\n\t</style>\n\t<div class="box">\n\t\t<section class="head"></section>\n\t\t<section class="middle"></section>\n\t\t<section class="bottom"></section>\n\t</div>\n</body>\n```\n\n### flex 布局\n\n```html\n<body>\n\t<style>\n\t\thtml, body, .box {\n\t\t\theight: 100%;\n\t\t}\n\t\t.box {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\theight: 100%;\n\t\t}\n\t\t.head {\n\t\t\theight: 100px;\n\t\t\tbackground: red;\n\t\t}\n\t\t.middle {\n\t\t\tflex: 1;\n\t\t\tbackground: yellow;\n\t\t}\n\t\t.bottom {\n\t\t\theight: 100px;\n\t\t\tbackground: red\n\t\t}\n\t</style>\n\t<div class="box">\n\t\t<section class="head"></section>\n\t\t<section class="middle"></section>\n\t\t<section class="bottom"></section>\n\t</div>\n</body>\n```\n\n### grid 布局\n\n```html\n<body>\n\t<style>\n\t\thtml, body, .box {\n\t\t\theight: 100%;\n\t\t}\n\t\t.box {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 100%;\n\t\t\tgrid-template-rows: 100px auto 100px;\n\t\t}\n\t\t.head {\n\t\t\theight: 100px;\n\t\t\tbackground: red;\n\t\t}\n\t\t.middle {\n\t\t\tbottom: 100px;\n\t\t\tbackground: yellow;\n\t\t}\n\t\t.bottom {\n\t\t\theight: 100px;\n\t\t\tbackground: red\n\t\t}\n\t</style>\n\t<div class="box">\n\t\t<section class="head"></section>\n\t\t<section class="middle"></section>\n\t\t<section class="bottom"></section>\n\t</div>\n</body>\n```\n\n### table 布局\n\n```html\n<body>\n\t<style>\n\t\thtml, body, .box {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.box {\n\t\t\tdisplay: table;\n\t\t}\n\t\t.head {\n\t\t\tdisplay: table-row;\n\t\t\twidth: 100%;\n\t\t\theight: 100px;\n\t\t\tbackground: red;\n\t\t}\n\t\t.middle {\n\t\t\tdisplay: table-row;\n\t\t\twidth: 100%;\n\t\t\tbackground: yellow;\n\t\t}\n\t\t.bottom {\n\t\t\tdisplay: table-row;\n\t\t\twidth: 100%;\n\t\t\theight: 100px;\n\t\t\tbackground: red\n\t\t}\n\t</style>\n\t<div class="box">\n\t\t<section class="head">123</section>\n\t\t<section class="middle">456</section>\n\t\t<section class="bottom">789</section>\n\t</div>\n</body>\n```'}}]);