import Search from "./search";
import { connect } from "react-redux";
import { searchVideos } from "../../actions/video_actions";

const mapStateToProps = (state) => ({
  videos: Object.values(state.entities.videos),
  mode: state.ui.mode,
});

const mapDispatchToProps = (dispatch) => ({
  search: (search) => dispatch(searchVideos(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
