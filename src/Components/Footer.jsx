import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-[#444] bg-[#fdfaf5] pt-10 pb-16 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-6 sm:gap-10">

        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

          {/* LEFT SIDE → Social media icons */}
          <div className="flex gap-5">
            <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
              <FaXTwitter className="text-xl" />
            </a>

            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <FaInstagram className="text-xl" />
            </a>

            <a href="#" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
              <FaGithub className="text-xl" />
            </a>
          </div>

          {/* RIGHT SIDE → Navigation links */}
          <div className="gap-5 font-bold sm:text-left flex flex-wrap text-sm text-center justify-center">
            <a href="#" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Help Center</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
          </div>

        </div>

        {/* COPYRIGHT (kept separate as before) */}
        <div className="text-sm text-center font-semibold  sm:text-left">
          &copy; {new Date().getFullYear()} Ek Cup Coffee With Max

          <pre>    Made by Tejasvi ❤️</pre>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;
