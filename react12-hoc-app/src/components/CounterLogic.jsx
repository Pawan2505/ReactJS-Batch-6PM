import React, { useState } from 'react'

const CounterLogic = (WrappedComponent) => {
  
    const EnhencedComponent=()=> {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        }

        return <WrappedComponent count={count} increment={increment} />;

    }
    
return EnhencedComponent
}

export default CounterLogic