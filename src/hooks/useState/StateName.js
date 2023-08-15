import React, {useState} from 'react'

const StateName = () => {

  const [inputVal, setInputVal] = useState("Dan");

  const nameChange = (e) => {
    let newVal = e.target.value;
    setInputVal(newVal);
  }

  return (
    <div>
      <input
        onChange={nameChange}
        type="text"
        placeholder='Enter something'
      />
      {inputVal}
    </div>
  )
}

export default StateName
