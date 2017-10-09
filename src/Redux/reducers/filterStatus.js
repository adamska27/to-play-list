import { FILTER_MYGAMES } from '../actions'

function filterStatus(state = 'all', action) {
    switch(action.type) {
      case FILTER_MYGAMES:
        if (action.filterStatus === 'played') state = 'played'
        else if (action.filterStatus === 'to play') state ='to play'
        else state = 'all'
      default:
        return state
    }
}

export default filterStatus