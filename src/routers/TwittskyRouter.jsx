import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import Profile from '../components/profile/Profile'
import Login from '../components/login/Login'

const TwittskyRouter = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route index path='/home' element={<Home />} />
            <Route path=':userName' element={<Profile />} />
            <Route path='/login' element={<Login />} />

        </Routes>
    </BrowserRouter>
  )
}

export default TwittskyRouter