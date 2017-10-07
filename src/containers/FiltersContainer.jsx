import React from 'react'
import Filters from '../components/Filters'


import { connect } from 'react-redux'
import { filterMyGames } from '../Redux/actions'

const mapStateToProps = (state) => state

const FiltersContainer = connect(
    mapStateToProps,
    { filterMyGames }
)(Filters)


export default FiltersContainer