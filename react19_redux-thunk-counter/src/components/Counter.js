import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCount } from '../redux/CounterThunk';

const Counter = () => {
    const dispatch = useDispatch();
    const {count,loading} = useSelector((state)=>state);

    useEffect(()=>{
        dispatch(loadCount()); // Load counter from server -> redux
    },[dispatch])
  return (
    <div style={{textAlign:'center', marginTop:'100px'}}>

        <h1>Counter with Redux Thunk</h1>

        {
            loading?(
                <p>Loading counter...</p>
            ):(
                <>
                
                <h2>{count}</h2>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
                <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
                
                </>
            )
        }
      
    </div>
  )
}

export default Counter
