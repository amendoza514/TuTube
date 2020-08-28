import Navbar from './navbar';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { searchVideos } from '../../actions/video_actions';
import { darkMode, normalMode } from "../../actions/mode_actions";


const mapStateToProps = (state) => ({
  mode: state.ui.mode,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  search: (search) => dispatch(searchVideos(search)),
  darkMode: () => dispatch(darkMode()),
  normalMode: () => dispatch(normalMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
