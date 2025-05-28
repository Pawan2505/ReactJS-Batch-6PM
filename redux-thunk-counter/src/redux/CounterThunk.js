import { type } from "@testing-library/user-event/dist/type";

export const loadCount = ()=>{
    return (dispatch)=>{
        dispatch({type:'LOADING'});


        // async API Call

        setTimeout(()=>{
            dispatch({
                type: 'SET_COUNT',
                payload: 10,
            });
        },2000);
    }
}