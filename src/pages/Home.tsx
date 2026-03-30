import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"


const Home = () => {
  return (
    <>
    
    <div className="flex items-center justify-center h-screen gap-5">
      <Button size={"lg"} variant={"outline"} className="bg-blue-200 text-black">
        <Link to="/signup">Sing Up </Link>
      </Button>
      <Button size={"lg"} className="bg-blue-950 text-white" >
        <Link to="/login">Sing In </Link>
      </Button>
    </div>
    
    </>
  )
}

export default Home