var snabbdom = require('snabbdom')
var pin = require('linchpin')
var minesweeper = require('minesweeper')

var patch = snabbdom.init([])
var h = require('snabbdom/h')

var ma = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
})
var board = new minesweeper.Board(ma)


var vnode
var state = {
  title: 'MineSweeper',
  grid: board.grid(),
  boardState: board.state()
}

var App = require('./components/app')

pin.on('render', function (state) {
  vnode = patch(vnode, App(state))
})

pin.on('openCell', function (x, y) {
  board.openCell(x,y)
  state.grid = board.grid()
  state.boardState = board.state()
  pin.emit('render', state)
})

vnode = patch(document.body, h('h1', ['Loading']))

setTimeout(function () {

  pin.emit('render', state)
}, 0)
