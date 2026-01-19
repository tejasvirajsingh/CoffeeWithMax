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
                 <div>

                  <div>

                    
                  </div>
                 </div>
      </div>
    </div>
  )
}

export default Signup
