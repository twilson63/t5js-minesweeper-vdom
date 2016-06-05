var h = require('snabbdom/h')
var { div, a } = require('hyperscript-helpers')(h)

var { BoardStateEnum } = require('minesweeper')


module.exports = function (state) {
  return div('.navbar.navbar-light.bg-faded', [
    a('.navbar-brand', { href: '#'}, [state.title]),
    div('.pull-xs-right.label.label-primary', [
      description(state.boardState)
    ])
  ])
}

function description (state) {
  if (state === BoardStateEnum.PRISTINE) {
    return 'Ready'
  } else if (state === BoardStateEnum.IN_PROGRESS) {
    return 'In Progress'
  } else if (state === BoardStateEnum.LOST) {
    return 'You Lose'
  } else if (state === BoardStateEnum.WIN) {
    return 'You Win'
  }
  return 'Unknown'
}
