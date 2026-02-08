import {Link} from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";





const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Only for Desktop  */}

      <div className="hidden md:flex md:w-[30%] flex-col justify-between px-6 py-6 bg-[#f0c9b0]">
        {/* Logo  */}
        <div className="pt-3 flex items-center gap-1">
          <Link to="/"> 
          <img src={logo} alt="Coffeecup" className="w-8 h-8 cursor-pointer" />
          </Link>
          <h1 className="text-lg   items-center font-medium text-gray-800">Welcome to {" "}
          <span className="logo-font text-lg text-coffeeBrown">  Coffee with Max</span>
          </h1>
        </div>

        {/* center section  */}
           <div className="bg-white rounded-2xl p-6 m-8 mt-28 shadow-md text-center">
            <h2 className="text-xl font-bold mb-1 text-gray-900">Support Creators</h2>
            <p className="text-xs text-gray-600 mb-4">An easy way for your Audience to say Thanks..</p>
            <div className="bg-gray-100 p-4 text-left rounded-lg text-sm text-gray-700">
              Buy a Tejasvi's Coffee 🍵
              <div className="flex gap-2 mt-2">
                <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">1</button>
                <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">3</button>
                <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">5</button>



              </div>
              <p className="mt-2 text-xs text-gray-500 "> Someone bought 3 Coffee</p>

            </div>
            <button className="mt-4 bg-coffeeBrown px-4 py-2 rounded-full font-semibold text-white transition ">Coffee $ 5  </button>
           </div>

                {/* making bottom section  */}
                 <div className="flex flex-col items-center mt-8">

                  <div className="flex space-x-[-10px]">
                    {[ "women/1", "men/2", "women/3", "women/4", "men/5" ].map((src,i) => (
                      <img key={i} 
                      src={`https://randomuser.me/api/portraits/${src}.jpg`}
                      alt="userLogo"
                      className=" w-8 h-8 rounded-full border-2 border-white " 
                      />
                    ))}

                    
                  </div>
                  <p className="text-sm text-gray-900 mt-2 font-medium text-center">Loved by 1M + Creators</p>
                 </div>
      </div>

      {/* Right section Making form here  */}

      <div className="w-full md:w-[70%] bg-white rounded-none md:rounded-l-4xl shadow-xl flex flex-col px-4 py-6 md:px-10 md:py-10">



        {/* making top bar of Signup pages */}
         <div className="flex justify-between items-center mb-6 md:mb-10">
          <Link to="/">
          <img src={logo} alt={logo} className="w-8 h-8 md:hidden " />
          </Link>
          <p className="text-sm text-gray-700">
            Already Have an Account?{" "}
            <Link to="/login" className="text-black cursor-pointer font-medium underline" >
            Sign in</Link>
          </p>
         </div>
 {/* making center part of singup page so sign up function will Execuite  */}

        <div className="flex-1 items-center flex   justify-center">
           
           <div className="w-full  max-w-xs md:max-w-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Create Your Account</h2>
            <p className=" text-sm text-gray-500 mb-4 text-center">Choose a usrname for your page</p>

             {/* Donmain Input Section  */}
               
               <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100 mb-6">
                {/* <span className="px-3 text-gray-600 text-sm font-bold whitespace-nowrap">coffewithmax.com</span> */}
                <input type="text" placeholder="Enter your Email id@.com " className="flex-1 bg-transparent px-2 py-2 outline-none text-gray-800 text-sm"></input>
               </div>
               <button className="w-full bg-coffeeBrown hover:bg-opacity-90 text-white font-semibold py-2 rounded-lg cursor-pointer transition text-sm mb-3 ">Sign up</button>
               <p className="text-xs text-gray-500 text-center" >By continuing, you agree to { " "} 
                <a href="#" className=" underline decoration-blue-800" >terms of Servies</a> {" "} and { " "}
                <a href="#" className="underline  decoration-blue-800">privacy policy</a>.

               </p>

           </div>



        </div>

      </div>
    </div>
  )
}

export default Signup
