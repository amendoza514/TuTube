import Navbar from './navbar';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(Navbar)
