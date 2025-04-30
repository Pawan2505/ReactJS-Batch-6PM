import React from 'react'
// import MyCompnt from './components/DefaultComponent'
import {NamedComponent1,NamedComponent2} from './components/NamedComponent'
const App = () => {
  return (
    <div>
      {/* <MyComponent/> */}
      {/* <MyCompnt/> */}
      <NamedComponent1 />
      <NamedComponent2/>
    </div>
  )
}

export default App