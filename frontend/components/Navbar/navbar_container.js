import Navbar from './navbar';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { searchVideos } from '../../actions/video_actions'

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    search: search => dispatch(searchVideos(search))
});

export default connect(null, mapDispatchToProps)(Navbar)
