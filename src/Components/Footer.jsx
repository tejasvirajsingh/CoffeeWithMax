import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-[#444] bg-[#fdfaf5] pt-10 pb-16 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">

        {/* ================= ROW 1 ================= */}
        {/* Social icons (left) + Navigation links (right) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* LEFT → Social media icons */}
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/tejasvirajsingh/" aria-label="Linkedin" className="hover:scale-125 transition-transform duration-200">
              <FaLinkedin className="text-xl" />
            </a>

            <a href="https://www.instagram.com/tejasvi_max/?hl=en" aria-label="Instagram" className="hover:scale-125 transition-transform duration-200">
              <FaInstagram className="text-xl" />
            </a>

            <a href="https://github.com/tejasvirajsingh" aria-label="GitHub" className="hover:scale-125 transition-transform duration-200">
              <FaGithub className="text-xl" />
            </a>
          </div>

          {/* RIGHT → Navigation links */}
          <div className="flex gap-5 font-bold underline text-sm flex-wrap justify-center">
            <a href="#" className="inline-block hover:scale-110 transition-transform duration-200">About</a>
            <a href="#" className="inline-block hover:scale-110 transition-transform duration-200">Help Center</a>
            <a href="#" className="inline-block hover:scale-110 transition-transform duration-200">Privacy</a>
            <a href="#" className="inline-block hover:scale-110 transition-transform duration-200">Terms</a>
          </div>

        </div>

        {/* ================= ROW 2 ================= */}
        {/* Centered copyright + made by */}
        <div className="text-center text-sm font-semibold flex flex-col  justify-center items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} Ek Cup Coffee With Max
          </span>
          <pre>• Made by Tejasvi ❤️</pre>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
