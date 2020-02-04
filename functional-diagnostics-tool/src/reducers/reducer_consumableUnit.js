import { FETCH_CONSUMABLEUNIT } from '../actions/consumableUnit';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  // console.log("reducer_consumableUnit");
  // console.log(action);
  switch(action.type) {
    case FETCH_CONSUMABLEUNIT:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
