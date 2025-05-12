import React from 'react'
import CounterLogic from './components/CounterLogic'
import CounterUI from './components/CounterUI'

const ConterLogicUI = CounterLogic(CounterUI);
const App = () => {
  return (
    <div>
      <ConterLogicUI/>
    </div>
  )
}

export default App