import React, { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Typography from '@mui/material/Typography'
import Home from './components/Home'
import Questionnarre from './components/Questionnarre'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <Navbar />

      <div className='container mx-auto px-10 py-12'>
        {/* <ProgressBar /> */}
        {/* <Home /> */}
        <div className='py-10'>
          <Questionnarre />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
