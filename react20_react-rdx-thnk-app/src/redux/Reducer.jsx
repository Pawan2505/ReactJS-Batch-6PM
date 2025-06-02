import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

const initialState = {
    loading:false,
    error: false,
    data:[]
}


export const createReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_REQUEST:
            return {...state, loading:true, error:false,data:[]}
        case FETCH_SUCCESS:
            return {...state, loading:false,error:false,data:action.payload}
        case FETCH_FAILURE:
            return {...state, loading:false, error:true, data:[]}
        default:
            return state;
    }
}