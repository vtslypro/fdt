import { combineReducers } from 'redux';
import AppCastReducer from './reducer_appcast';
import ConsumableUnitReducer from './reducer_consumableUnit';

const rootReducer = combineReducers({
  appCast: AppCastReducer,
  consumableUnit: ConsumableUnitReducer
});

export default rootReducer;
