import * as actions from '../actions/configActions';
import { v4 as uuidv4 } from 'uuid';

export const initialState ={
    cookieFound: false,
    user_config: {},
    temp_config: {"id":`${uuidv4()}`,"sets":"3","items":"3"}
}

export default function configReducer(state=initialState, action){
    switch(action.type){
        case actions.CONFIG_SET:
                return {cookieFound: true,user_config: action.payload};
        case actions.CONFIG_RESET:
                return initialState;
        default: return state;
    }
};