import Footer from "./components/Footer/footer"
import Navbar from "./components/Navbar/navbar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
