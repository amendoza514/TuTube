import { NORMAL_MODE, DARK_MODE } from "../actions/mode_actions";

export default function modeReducer(state = false, action) {
  switch (action.type) {
    case DARK_MODE:
      return true;
    case NORMAL_MODE:
      return false;
    default:
      return state;
  }
}
