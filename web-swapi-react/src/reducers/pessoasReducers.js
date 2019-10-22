import {
    GET_PESSOAS,
    GET_PESSOAS_SUCCESS,
    GET_PESSOAS_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    list: [],
    loading: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PESSOAS:
            return {
                ...state,
                loading: true,
                error: false
            }
        
        case GET_PESSOAS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                list: action.payload
            }
        
        case GET_PESSOAS_FAIL:
            return {
                ...state, 
                loading: false,
                error: true            
            }
            
        default:
            return state
    }
}