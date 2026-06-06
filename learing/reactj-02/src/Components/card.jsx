import React from 'react'

function Card() {
  return (
    <div className="card">
        <h1>gautam</h1>
        <p>this is a simple card component</p>
        <button onClick={() => console.log('Button clicked!')}>Click me</button>
    </div>
  )
}

export default Card
