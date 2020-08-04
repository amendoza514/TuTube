import { SEARCH } from "../actions/search_actions";

export default function searchReducer(state = '', action) {
  switch (action.type) {
    case SEARCH:
      return action.search;
    default:
      return state;
  }
}
