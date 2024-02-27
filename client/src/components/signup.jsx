// import React from "react"
import LoginImg from "../assets/trees.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

 function Signup()
{
    return (
        <div className="relative w-full h-full bg-zinc-900/90">
            <img className="absolute w-full h-full object-cover mix-blend-overlay" src={LoginImg} alt="/" />
        
        <div className="flex justify-center items-center  h-full">
            <form className="max-w-[400px] w-full mx-auto max-h-full bg-white p-8" action="" method="post">
                <h2 className="text-3xl font-bold py-4 pt-0 text center">
                 Create Your Locator Account
                </h2>
            <div className="flex justify-between py-5 pt-0">
            <p className="border relative px-6 py-2 hover:shadow-xl shadow-lg flex items-center"><SiFacebook className="mr-2"/> FACEBOOK</p>
            <p className="border relative px-6 py-2 hover:shadow-xl shadow-lg flex items-center"><FcGoogle className="mr-2"/> GOOGLE</p>
            </div>
            <div className="flex flex-col mb-4">
            <label >Full Name</label>
            <input className="border relative bg-gray-300 p-2" type="text" />
        </div>

            <div className="flex flex-col mb-4">
            <label >Phone Number</label>
            <input className="border relative bg-gray-300 p-2" type="text" />
        </div>

        <div  className="flex flex-col">
            <label>Password</label>
            <input className="border relative bg-gray-300 p-2" type="password" />
        </div>

        <div  className="flex flex-col">
            <label> Confirm Password</label>
            <input className="border relative bg-gray-300 p-2" type="password" />
        </div>

        <p className="mt-2 flex items-center"><input className="mr-2" type="checkbox" />
        Remember Me
        </p>

        <button className="w-full py-3 mt-6 bg-orange-700 hover:bg-orange-900 relative text-white rounded-lg  ">Create Your Account</button>

        <div className="mt-2 text-sm text-center">
        <span> Do You Already Have a Locator Account?   <Link to="/login" className="text-orange-700">Sign In Here </Link> </span>
        </div>
            </form>
        </div>
        
        </div>
    )
}
 
export default Signup