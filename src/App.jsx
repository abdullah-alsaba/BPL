import { Suspense } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import './index.css'
import Players from "./components/Players/Players"
import Loading from "./components/Loading/Loading"


const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<Loading></Loading>}>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
