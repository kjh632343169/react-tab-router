/**
 *
 * @param {string/Buffer} content源文件的内容
 * @param {object}[map] sourcemap相关的数据
 * @param {any} [meta] 元数据，可以是任何内容
 */
const loader = function (content, map, meta) {
  console.log(content)
  return content
  // 你的 webpack loader 代码
}

module.exports = loader

module.exports.patch = function () {
  console.log('custom loader patch')
}

// module.exports = (content, map, meta) => {
//   this.callback(null, content, map, meta)
// }
