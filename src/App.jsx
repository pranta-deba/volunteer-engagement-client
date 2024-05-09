
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
function App() {

  return (
    <div className='relative'>
      <Navbar />
      <main className='min-h-[calc(100vh-435.6px)]'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
