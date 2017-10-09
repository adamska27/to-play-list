import Form from '../components/Form'

import { connect } from 'react-redux'
import { fetchGames } from '../Redux/actions'

const FormContainer = connect(
    null,
    { fetchGames }
)(Form)

export default FormContainer