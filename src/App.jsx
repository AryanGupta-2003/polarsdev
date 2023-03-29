import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Welcome,Footer,About,Hireus,Project,Team,Testi,Wedo } from './components'

const App=() =>{
  

  return (
    <Router>
    <div>
    
          
          
      <div>
      <Navbar/>
          <Welcome/>
          <About/>
          <Wedo/>
          <Project/>
          <Hireus/>
          <Team/>
          <Testi/>
          <Footer/>
         
      </div>
    </div>
    </Router>
  )
}

export default App
