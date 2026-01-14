import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Donation from './Components/Donation'
import ScrollToTop from './ScrollToTop'
const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Header/>
    <main className="pt-20 sm:pt-20 lg:pt-20">
      <Outlet/>
    </main>
    
    <Footer/>
    
    </>
  )
}

export default App