import {
    GET_PESSOAS,
    GET_PESSOAS_SUCCESS,
    GET_PESSOAS_FAIL
} from "./types"

import api from "./api"

export const getPessoas = (page) => {
    if(!page)
        page = 1
    return dispatch => {
        dispatch({ type: GET_PESSOAS })
        api.get('people/?page=' + page)
        .then(res => {
            dispatch({ type: GET_PESSOAS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_PESSOAS_FAIL })
        })
    }
}