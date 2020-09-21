import { combineReducers } from 'redux';
import configReducer from './configReducer';

const rootReducer = combineReducers({
    configState: configReducer
})

export default rootReducer;