import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';

const rootReducer = combineReducers({
  character: characterReducer,
});

export default rootReducer;
