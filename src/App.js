import React from 'react'
import "./App.css"
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Plans from './Components/plans/Plans'
import Program from './Components/Programs/Program'
import Purpose from './Components/Purpose/Purpose'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
    return (
        <div className='App'>
            <Home />
            <Program />
            <Purpose />
            <Plans />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default App
