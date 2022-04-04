import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProgressBar from './components/ProgressBar'
import Footer from './components/Footer'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Questionnarre from './pages/Questionnarre'
import Forum from './pages/Blog'
import Pair from './pages/Pair'
import Error from './pages/Error'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/main/*' element={<Main />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
