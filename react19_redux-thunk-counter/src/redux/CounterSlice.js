const initialState ={
    count:0,
    loading:false,
};


// Reducer


export const counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'SET_COUNT':
            return{...state, count:action.payload,loading:false};
        case 'INCREMENT':
            return {...state, count: state.count+1};
        case 'DECREMENT':
            return {...state, count: state.count-1};
        default:
            return state;
    }
};