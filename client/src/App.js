import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProgressBar from './components/ProgressBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Questionnarre from './pages/Questionnarre'
import Forum from './pages/Blog'
import Pair from './pages/Pair'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      {/* <div className='container mx-auto px-10 py-12'>
        <div className='py-10'>
          <Questionnarre />
        </div>
      </div> */}
      {/* <Footer /> */}
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/questions' element={<Questionnarre />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pair' element={<Pair />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
