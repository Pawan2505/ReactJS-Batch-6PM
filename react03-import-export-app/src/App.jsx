import React from 'react'
// import MyComponent from './components/DefaultComponent'
import {NamedComponent1,NamedComponent2} from './components/NamedComponent'
const App = () => {
  return (
    <div>
      {/* <MyComponent/> */}
      <NamedComponent1 />
      <NamedComponent2/>
    </div>
  )
}

export default App