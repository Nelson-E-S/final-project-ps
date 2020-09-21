import * as actions from '../actions/configActions';

export const initialState ={
    user_config: '',
    temp_config: ''
}

export default function configReducer(state=initialState, action){
    switch(action.type){
        case actions.CONFIG_SET:
                return {user_config: action.payload};
        case actions.CONFIG_RESET:
                return initialState;
        default: return state;
    }
};