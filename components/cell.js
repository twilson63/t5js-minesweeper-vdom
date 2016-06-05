var pin = require('linchpin')

var h = require('snabbdom/h')
var { div } = require('hyperscript-helpers')(h)
var most = require('most')
var { tail } = require('ramda')

var { CellStateEnum, CellFlagEnum } = require('minesweeper')

module.exports = function (cell) {
  return div(`#c${cell.x}|${cell.y}.col-xs-1`, cellState(cell))
}

most.fromEvent('click', document)
  .filter(ev => ev.target.classList.contains('col-xs-1'))
  .map(ev => tail(ev.target.id.split('')).join('').split('|'))
  .observe(cell => {
     pin.emit('openCell', cell[0], cell[1])
  })

function cellState(cell) {
  if (cell.state === CellStateEnum.CLOSED) {
    if (cell.flag === CellFlagEnum.NONE) {
      return 'X'
    } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
      return '!'
    } else if (cell.flag === CellFlagEnum.QUESTION) {
      return '?'
    }
  } else if (cell.state === CellStateEnum.OPEN) {
    if (cell.isMine) {
      return '*'
    } else {
      return cell.numAdjacentMines === 0 ? ' ' : cell.numAdjacentMines.toString()
    }
  }
}
