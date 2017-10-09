import Filters from '../components/Filters'

import { connect } from 'react-redux'
import { filterMyGames } from '../Redux/actions'

const FiltersContainer = connect(
    null,
    { filterMyGames }
)(Filters)

export default FiltersContainer