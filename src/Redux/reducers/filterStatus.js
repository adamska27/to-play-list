import { FILTER_MYGAMES } from '../actions'

function filterStatus(state = 'all', action) {
  if (action.type === FILTER_MYGAMES) {
      return action.filterStatus
  } else {
    return state      
  }
}

export default filterStatus