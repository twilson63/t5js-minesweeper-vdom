var h = require('snabbdom/h')
var { div } = require('hyperscript-helpers')(h)

var NavComponent = require('./nav')
var BoardComponent = require('./board')

module.exports = function (state) {
  return div('.container', [
    NavComponent(state),
    BoardComponent(state)
  ])
}
