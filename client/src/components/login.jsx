import LoginImg from "../assets/trees.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

const Login = ()=>{
    // const HandleSignIn = (event)=>{
    //     event.preventDefault()
    //     // const navigator = useNavigation()
    //     // navigator('/signin')
    //     console.log('this ran')
    // }
    return (
        <div className="relative w-full h-screen bg-zinc-900/90">
            <img className="absolute w-full h-full object-cover mix-blend-overlay" src={LoginImg} alt="/" />
        
        <div className="flex justify-center items-center  h-full">
            <form className="max-w-[400px] w-full mx-auto bg-white p-8" action="" method="post">
                <h2 className="text-3xl font-bold py-4 text center">
                 Sign Into Your Locator Account
                </h2>
            <div className="flex justify-between py-8">
            <p className="border relative px-6 py-2 hover:shadow-xl shadow-lg flex items-center"><SiFacebook className="mr-2"/> FACEBOOK</p>
            <p className="border relative px-6 py-2 hover:shadow-xl shadow-lg flex items-center"><FcGoogle className="mr-2"/> GOOGLE</p>
            </div>
            <div className="flex flex-col mb-4">
            <label >Phone Number</label>
            <input className="border relative bg-gray-300 p-2" type="text" />
        </div>

        <div  className="flex flex-col">
            <label>Password</label>
            <input className="border relative bg-gray-300 p-2" type="password" />
        </div>
        <p className="mt-2 flex items-center"><input className="mr-2" type="checkbox" />
        Remember Me
        </p>

        <button className="w-full py-3 mt-6 bg-orange-700 hover:bg-orange-900 relative text-white rounded-lg">Sign In</button>
      
        <span className="mt-2 text-sm text-center">Do Not Have a Locator Account?  <Link className="text-orange-700 cursor-pointer" to="/signup"> Sign Up Now </Link> </span>

        
            </form>
        </div>
        
        </div>
    )
}
 
export default Login