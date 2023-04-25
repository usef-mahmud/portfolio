import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ErrorPage from './pages/ErrorPage/ErrorPage'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

import './App.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </div>
        <Navbar />

      </BrowserRouter>

      <Analytics />
    </div>
  )
}

export default App
