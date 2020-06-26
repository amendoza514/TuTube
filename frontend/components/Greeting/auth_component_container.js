import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions'
import AuthComponent from './auth_component'

const mapStateToProps = (state, ownProps) => ({
    loggedIn: !!state.session.id,
    // modalType: ownProps.match.params.users
});

//ownProps on route to grab login / sign up

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);