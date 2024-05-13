import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { RotatingLines } from 'react-loader-spinner';
import useAllProvider from './hooks/useAllProvider';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import { TbArrowBarUp } from "react-icons/tb";


function App() {
  const { userLoader } = useAllProvider();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


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
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-[#00df9a] hover:bg-[#00df9a] p-4 rounded-full text-black transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <TbArrowBarUp />
      </button>
    </div>
  )
}

export default App
