import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/SignIn"
import Signup from "./pages/SignUp"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const App = () => {

  const [open,setOpen] = useState(false);

  return (
    <BrowserRouter>
    <nav className='bg-white absolute top-0 px-4.5! py-5! font-medium z-999 justify-center items-center w-full border-b-2'>
        <div className=' hidden items-center justify-center gap-4 sm:flex'>
          <Link to="/">Home </Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">signup</Link>
        </div>
        <div className="flex sm:hidden justify-end">
          {open?
          
          <div className='flex flex-col items-end gap-4'>
            <X onClick={()=> setOpen(false)}></X>
            <div className='flex flex-col gap-1 w-80 bg-amber-300 p-4! rounded-3xl'>
            <Link to="/">Home </Link>{" "}
            <Link to="/login">About</Link>{" "}
            <Link to="/signup">signup</Link>
            </div>
          </div>
         :<Menu onClick={()=> setOpen(true)}></Menu>}
        </div>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
