import { Suspense, useState } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import './index.css'
import Players from "./components/Players/Players"
import Loading from "./components/Loading/Loading"
import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer/Footer"
import Newsletter from "./components/NewsLetter/Newsletter"


const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json();
}
const playerPromise = fetchPlayer();

function App() {

  const [coin, setCoin]=useState(50000000)
  
  
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<Loading></Loading>}>
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
      <div className="relative z-10">
        <Newsletter />
      </div>

      
      <Footer />
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App
