import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CompanyInfo from './components/CompanyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen flex flex-col md:bg-purple-100 ">
     <Header/>
     <hr className="border-purple-700 border-b-2" />
     <main className="flex-grow">
     <Hero/>
     <CompanyInfo/>
     <br /> <br />
     </main>
     <Footer/>
    </div>
  )
}

export default App
