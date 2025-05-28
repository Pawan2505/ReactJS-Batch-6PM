import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase,decrease } from '../redux/Action'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
  return (
      <div>
          <h1>Redux Counter</h1>
          <h2>Count : {count}</h2>
          <button onClick={()=>dispatch(increase())}>+</button>
          <button onClick={()=>dispatch(decrease())}>-</button>
    </div>
  )
}

export default Counter