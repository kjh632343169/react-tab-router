/**
 * 1. webpack 加载 webpack.config.js 中所有的配置，此时会 new TestPlugin()，执行插件的 constructor.
 * 2. webpack创建compiler对象。
 * 3. 遍历所有 plugins 中插件， 调用插件的 apply方法。
 * 4. 执行剩下编译流程(触发各个hooks事件。)
 */

class TestPlugin {
  constructor() {
    console.log('TestPlugin constructor')
  }
  apply(compiler) {
    console.log('TestPlugin apply')
  }
}
module.exports = TestPlugin
