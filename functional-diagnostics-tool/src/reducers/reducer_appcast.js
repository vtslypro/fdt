import { FETCH_APPCAST } from '../actions/index';

const INITIAL_STATE = { all: [], error: null };

export default function(state = INITIAL_STATE, action) {
  // console.log("reducer_appcast");
  // console.log(action);
  switch(action.type) {
    case FETCH_APPCAST:
      return { ...state, all: action.payload.data , error: action.payload.error, status: action.payload.status, statusText: action.payload.statusText};
    default:
      return state;
  }
}
