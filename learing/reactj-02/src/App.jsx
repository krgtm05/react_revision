import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './Components/Card'
import './App.css'
import jobPostings from './data/userdetails'

function App() {
  return (
    <>
      {
        jobPostings.map(
          // function(ele){
          //   return <Card user={ele.name} age={ele.age} key={ele.id}/>
          // } 
          ele => (
            <Card type={ele.type} location={ele.location} company={ele.company} experience={ele.experience} salary={ele.salary} posted={ele.posted} key={ele.id} />
          )
        )
      }
    </>
  )
}

export default App
