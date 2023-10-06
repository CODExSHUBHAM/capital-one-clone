import Footer from "./components/Footer/footer"
import Navbar from "./components/Navbar/navbar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
