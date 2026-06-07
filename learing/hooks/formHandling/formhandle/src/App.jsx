import React from 'react'
import  './App.css'


const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted")
  }

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
