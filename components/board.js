var h = require('snabbdom/h')
var { div } = require('hyperscript-helpers')(h)

var RowComponent = require('./row')

module.exports = function (state) {
  return div('.container', state.grid.map(RowComponent))
}
