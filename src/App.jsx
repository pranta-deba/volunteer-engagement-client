import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { RotatingLines } from 'react-loader-spinner';
import useAllProvider from './hooks/useAllProvider';
import Footer from './components/Footer'
function App() {
  const { userLoader } = useAllProvider();
  if (userLoader) {
    return (
      <div className="h-screen flex justify-center items-center my-12">
        <RotatingLines
          visible={true}
          width="50"
          color="#00df9a"
          strokeWidth="5"
          animationDuration="0.95"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
