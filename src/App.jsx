/*File Name: script.js
 Student Name: Md Anamul Habib
 Student ID: (301393605)
 Date: [October 1,2024]*/
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About /> 
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App