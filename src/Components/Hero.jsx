import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import logo from "../assets/logo.png";
import Tilt from 'react-parallax-tilt';

const testimonials = [
  {
    name: "Harsh is Core supporter of Your Coffee",
    supporters: "4522",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Nirjala likes  Your Coffee",
    supporters: "1672",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    name: "Tejasvi Singh is Lover of Your Coffee",
    supporters: "1542",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Swati Die Heart fan of Your Coffee",
    supporters: "8822",
    avatar: "https://i.pravatar.cc/100?img=29",
  },
  {
    name: "Yash is Couple Love of Your Coffee",
    supporters: "3522",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    name: "Rani Rajput is Blind lover of Your Coffee",
    supporters: "2122",
    avatar: "https://i.pravatar.cc/100?img=16",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f1ee]">

      {/* Floating cards (Desktop only) */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        {/* left side testimonials cards  */}
        <div className="absolute top-25 left-2 w-50 rotate-[-4deg] z-10">
          <Tilt glareEnable={false}> 
            <Card {...testimonials[0]} />
          </Tilt>
         
        </div>
        <div className="absolute top-70 left-10 w-60 rotate-[-2deg] z-20">
          <Tilt glareEnable={false}>
 <Card {...testimonials[1]} />
          </Tilt>
          
         
        </div>
        <div className="absolute bottom-25 left-5 w-50 rotate-[-4deg] z-30">
          <Tilt glareEnable={false}>
<Card {...testimonials[2]} />
          </Tilt>
          
        </div>
        
        {/* Right side of Testimonials.  */}
         <div className="absolute top-25 right-2 w-50 rotate-[-4deg] z-10">
          <Tilt glareEnable={false}> 
            <Card {...testimonials[3]} />
          </Tilt>
         
        </div>
        <div className="absolute top-70 right-10 w-60 rotate-[2deg] z-20">
          <Tilt glareEnable={false}>
 <Card {...testimonials[4]} />
          </Tilt>
          
         
        </div>
        <div className="absolute bottom-25 right-5 w-50 rotate-[4deg] z-30">
          <Tilt glareEnable={false}>
<Card {...testimonials[5]} />
          </Tilt>
          
        </div>



      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 text-sm font-medium text-coffeeBrown mb-6">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          <span className="ml-2">Loved by 1M+ Coffee Supporters</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          Create more.
          <br />
          <span className="logo-font text-coffeeBrown">Coffee more.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-sm text-gray-500 max-w-2xl mx-auto mb-10">
          Serving your content? Let your fans serve the coffee.
          It’s simpler than you think.
        </p>

        {/* CTA Button */}
        <a
          href="/signup"
          className="relative group inline-flex items-center justify-center
          bg-coffeeBrown text-gray-200 font-bold text-sm sm:text-xl
          px-10 py-4 rounded-full border-2 border-[#BB591C]
          shadow-[0_0_45px_#BB591C]
          hover:bg-[#BB591C]
          transition-all duration-300 ease-in-out"
        >
          <img
            src={logo}
            alt="coffee logo"
            className="absolute w-12 h-12
            -top-4 left-6 rotate-[-10deg]
            group-hover:top-1/2 group-hover:left-1/2
            group-hover:-translate-x-1/2 group-hover:-translate-y-1/2
            group-hover:rotate-0
            transition-all duration-500 ease-in-out
            pointer-events-none"
          />

          <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            Get Started
          </span>
        </a>

        {/* Bottom Tagline */}
        <p className="text-sm text-gray-500 max-w-md mx-auto mt-6 leading-relaxed">
          Setting up your Coffee Page takes less time than boiling water.
        </p>
      </div>
    </section>
  );
}

/* Card Component */
const Card = ({ name, supporters, avatar }) => (
  <div
    className="backdrop-blur-md bg-[#edcfbc]/50 text-chaiBrown rounded-2xl p-4 text-center text-sm flex flex-col items-center gap-2 border border-[#BB591C]"
    style={{
      boxShadow:
        "rgba(187,89,28,0.25) 0px 50px 100px -20px, rgba(187,89,28,0.3) 0px 30px 60px -30px, rgba(187,89,28,0.35) 0px -2px 6px 0px inset",
    }}
  >
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 rounded-full object-cover"
    />

    <span className="font-bold text-sm text-center">{name}</span>

    <div className="flex items-center gap-1 text-chaiBrown text-xs mt-1">
      <FaHeart className="opacity-80" />
      <span >{supporters} supporters</span>
    </div>
  </div>
);
