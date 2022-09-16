import React from 'react'
import "./App.css"
import Home from './Components/Home/Home'
import Program from './Components/Programs/Program'
import Purpose from './Components/Purpose/Purpose'

const App = () => {
    return (
        <div className='App'>
            <Home />
            <Program />
            <Purpose />
        </div>
    )
}

export default App
