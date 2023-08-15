import React, {useState} from 'react'

const StateCounter= () => {

  let [counter, setCounter] = useState(0);

  const incrementCount = () => {
    let increment = counter += 1;
    setCounter(increment);
  }

  const decrementCount = () => {
    let decrement = counter -= 1;
    setCounter(decrement);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StateCounter;
