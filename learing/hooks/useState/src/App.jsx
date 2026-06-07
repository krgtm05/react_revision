import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0);
  const [num,setNum] = useState({username:"gautam",age:25});


  function increaseCount(){
    console.log("button clicked")
    setCount(count+1);
  }
  
  function decreaseCount(){
    setCount(count-1);
  }

  const changeButton = ()=> {
    const newNum = {...num};
    const newName = num.username === "gautam" ? "krish" : "gautam";
    newNum.username = newName;
    setNum(newNum);
  }


  let x = 0;
  return (
    <div>
      hi  this  is useSste hook

      <h3>{num.username}, {num.age}</h3>
      <button onClick={changeButton}>Button</button>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}> Increase  </button>
      <button onClick={decreaseCount}>Decrease  </button>
    </div>
  )
}

export default App
