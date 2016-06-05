var h = require('snabbdom/h')
var { div } = require('hyperscript-helpers')(h)

var CellComponent = require('./cell')

module.exports = function (row) {
  return div('.row', row.map(CellComponent))
}
