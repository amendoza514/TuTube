import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import SignupComponent from './signup_auth_component'

const mapStateToProps = state => ({
    loggedIn: !!state.session.id,
});

//ownProps on route to grab login / sign up

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);