import Home from './home'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logout()),
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, null)(Home)
