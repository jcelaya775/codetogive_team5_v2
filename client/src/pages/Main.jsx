import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Questionnarre from './Questionnarre'
import Pair from './Pair'
import Blog from './Blog'
import Error from './Error'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-16 px-4 md:px-6 lg:px-8'>
        <Routes>
          <Route path='/' element={<Questionnarre />} />
          <Route path='/pair' element={<Pair />} />
          <Route path='/forum' element={<Blog />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
