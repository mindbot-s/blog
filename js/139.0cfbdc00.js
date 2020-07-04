(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{794:function(n,r){n.exports="### ES5 之继承\n\n#### 基于构造函数的继承\n\n```js\nfunction Parent1() {\n  this.parent1 = 'parent1'\n  this.arr = [1, 2, 3]\n}\n\nParent1.prototype.walk = 'I can walk'\n\nfunction Child1() {\n  Parent1.call(this)\n  this.child1 = 'child1'\n}\n\nconst child11 = new Child1()\nconst child12 = new Child1()\n\n// 测试\nchild11.parent1 // parent1\nchild11.walk    // undefined\n\nchild11.arr.push(4)\nchild11.arr // [1, 2, 3, 4]\nchild12.arr // [1, 2, 3]\n```\n\n* 优点: 构造函数的 属性具有唯一性(child11.arr 与 child12.arr), 可参考[红皮书里的细节](https://github.com/MuYunyun/blog/blob/master/BasicSkill/%E5%9F%BA%E7%A1%80%E7%AF%87/%E4%BA%8C%E5%88%B7%E9%AB%98%E7%A8%8B.md#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F)\n* 缺点: 只能继承父类函数的方法和属性, 而不能继承原型对象的方法和属性\n\n#### 基于原型链的继承\n\n```js\nfunction Parent2() {\n  this.parent2 = 'parent2'\n  this.arr = [1, 2, 3]\n}\n\nParent2.prototype.walk = 'I can walk'\n\nfunction Child2() {\n  this.child2 = 'child2'\n}\n\nChild2.prototype = new Parent2()\n\nconst child21 = new Child2()\nconst child22 = new Child2()\n\n// 测试\nchild21.parent2 // parent2\nchild21.walk    // I can walk\n\nchild21.arr.push(4)\nchild21.arr // [1, 2, 3, 4]\nchild22.arr // [1, 2, 3, 4]\n```\n\n* 优点: 继承父类函数的方法和属性同时继承了原型对象的方法和属性\n* 缺点: 当在一个子类的实例上修改父类的属性和方法时, 其它的子类也会受到影响(相当于改变了子类原型链上的属性, 可以参考[二刷高程](https://github.com/MuYunyun/blog/blob/master/BasicSkill/%E5%9F%BA%E7%A1%80%E7%AF%87/%E4%BA%8C%E5%88%B7%E9%AB%98%E7%A8%8B.md#%E5%8E%9F%E5%9E%8B%E9%93%BE%E6%A8%A1%E5%BC%8F)\n\n------ 补充 ------\n\n补充下 Object.create() 这个 api, 也将它归类到基于原型链的继承。当继承的对象属性没变化时, 可以使用它。\n\n* 优点: 可以少写一个构造函数\n* 缺点: 同上述基于原型链继承的缺点\n\n#### 组合继承\n\n```js\nfunction Parent3() {\n  this.parent3 = 'parent3'\n  this.arr = [1, 2, 3]\n}\n\nParent3.prototype.walk = 'I can walk'\n\nfunction Child3() {\n  Parent3.call(this)  // 这里执行第一次父类\n  this.child3 = 'child3'\n}\n\nChild3.prototype = new Parent3() // 这里执行第二次父类, 原型继承发现只要把父子的原型对象绑定起来就好, 可以写成 Child3.prototype = new Parent3()>__proto__ 也正常\nconst child31 = new Child3()\nconst child32 = new Child3()\n\n// 测试\nchild31.parent3 // parent3\nchild31.walk    // I can walk\n\nchild31.arr.push(4)\nchild31.arr // [1, 2, 3, 4]\nchild32.arr // [1, 2, 3]\n```\n\n* 优点: 结合了构造函数继承和原型链继承的优点\n* 缺点: 父类方法调用了两次, 而且不能判断实例的构造函数是子类还是父类\n\n#### 组合继承优化一\n\n```js\nfunction Parent4() {\n  this.parent4 = 'parent4'\n  this.arr = [1, 2, 3]\n}\n\nParent4.prototype.walk = 'I can walk'\n\nfunction Child4() {\n  Parent4.call(this)\n  this.child4 = 'child4'\n}\n\nChild4.prototype = Parent4.prototype\nconst child41 = new Child4()\nconst child42 = new Child4()\n\n// 测试\nchild41.parent4 // parent4\nchild41.walk    // I can walk\n\nchild41.arr.push(4)\nchild41.arr // [1, 2, 3, 4]\nchild42.arr // [1, 2, 3]\n\nchild41.constructor // Parent4\n```\n\n* 优点: 解决了调用两次的问题\n* 缺点: 不能判断实例的构造函数是子类还是父类(此时 child41、child42 的构造函数指向 Parent4)\n\n#### 组合继承优化二\n\n```js\nfunction Parent5() {\n  this.parent5 = 'parent5'\n  this.arr = [1, 2, 3]\n}\n\nParent5.prototype.walk = 'I can walk'\n\nfunction Child5() {\n  Parent5.call(this)\n  this.child5 = 'child5'\n}\n\nChild5.prototype = Object.create(Parent5.prototype) // Object.create() 创建了一个中间对象, 起到隔离子类和父类的作用。\nChild5.prototype.constructor = Child5\nconst child51 = new Child5()\nconst child52 = new Child5()\n\n// 测试\nchild51.parent5 // parent5\nchild51.walk    // I can walk\n\nchild51.arr.push(4)\nchild51.arr // [1, 2, 3, 4]\nchild52.arr // [1, 2, 3]\n\nchild51.constructor // Child5\n```\n\n> Object.create() 的作用: Object.create(Parent5.prototype) 相当于一个空对象 {}, 这个空对象的 __proto__ 等于 Parent5.prototype, 所以这时候我们修改 Child5.prototype.constructor 实际上是在空对象上加上 constructor 属性。\n\n优点: 解决了不能判断实例的构造函数是子类还是父类的问题\n\n### 揭秘 ES6 继承之 super\n\n#### constructor 中的 super\n\n```js\nfunction Parent(props) {\n  this.props = props\n}\n\nclass Child extends Parent {\n  constructor() {\n    super() // 这里\n  }\n}\n\nvar child = new Child({a: 1})\n\nconsole.log(child.props) // undefined\n```\n\n为什么这里 child.props 会输出 undefined 呢, 让我们接着看以下两个例子。\n\n```js\nfunction Parent(props) {\n  this.props = props\n}\n\nclass Child extends Parent {\n  constructor(props) {\n    super(props)\n  }\n}\n\nvar child = new Child({a: 1})\n\nconsole.log(child.props) // {a: 1}\n```\n\n```js\nfunction Parent(props) {\n  this.props = props\n}\n\nclass Child extends Parent {\n\n}\n\nvar child = new Child({a: 1})\n\nconsole.log(child.props) // {a: 1}\n```\n\n可以看到第二种情况和第三种情况是相等的。继承中, 当子类没有写 constructor 时, 它会自动加上如下代码:\n\n```js\nconstructor(props) {\n  super(props)\n}\n```\n\n简单作个结论: 当 ES6 的类函数中有 constructor 和 super 时, 它们后面必须得跟个参数 props(名字随意), 否则原型链上的对象无法获取到相应属性。\n\n将之翻译成 ES5, 代码如下:\n\n```js\nfunction Parent(props) {\n  this.props = props\n}\n\nfunction Child(props) {\n  Parent.call(this, props) // 这里等价于 ES6 中 super(props)\n}\n\nChild.prototype = new Parent()\nvar child = new Child({a: 1})\n```\n\n#### 作为对象调用的 super\n\n在下面的案例中, super 作为对象调用, 那么它指向什么呢？\n\n```js\nclass Parent {\n  parentFn() {\n    console.log('I am parentFn')\n  }\n}\n\nclass Child extends Parent {\n  childFn() {\n    console.log(super.constructor)\n    super.parentFn()\n  }\n}\n\nvar child = new Child()\nchild.childFn()\n\n// Class Parent { ... }\n// I am parentFn\n```\n\n打印结果已经作出了回答。super 在作为对象调用时, 它指向了父类对象的实例。"}}]);