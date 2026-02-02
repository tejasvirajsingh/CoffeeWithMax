import { FaBolt, FaCogs, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import logo from "../assets/logo.png"; // 
import featureImage from "../assets/features.png";

const Features = () => {
  const features = [
    {
      title: "Instant Payment Setup",
      des: "Start receiving payments in seconds in your UPI account.",
      icon: <FaBolt className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Custom Membership Options",
      des: "Offer membership options and let fans grab them easily.",
      icon: <FaCogs className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Simple Dashboard",
      des: "Manage payment methods with a clean and simple dashboard.",
      icon: <FaUserFriends className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Zero Monthly Fees",
      des: "No hidden charges or subscriptions.",
      icon: <FaMoneyBillWave className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[#f5f1ee] text-center relative z-10 overflow-hidden">
      {/* Sub heading */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        Creator-first platform
      </p>

      {/* Main heading */}
      <h2 className="text-2xl sm:text-5xl font-extrabold text-coffeeBrown mb-6">
        Why Creators Love Us
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto mb-16 sm:mb-20 px-8 sm:px-0">
        We built Ek Cup Coffee to help creators grow, connect with fans, and earn
        without hassle. Here’s what makes us special.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-12 max-w-5xl mx-auto px-8 sm:px-0">
        {features.map((feature, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={800}
            className="w-full"
          >
            {/* ✅ Card wrapper was missing */}
            <div className="group relative bg-white border border-[#BB591C] rounded-xl p-6 pt-12 text-center space-y-3 shadow-md hover:shadow-lg transition-all duration-300">
              {/* Chai logo */}
              <img
                src={logo}
                alt="logo"
                className="absolute bottom-2 right-3 w-7 h-7 opacity-25 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0"
              />

              {/* Icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#3e2723] rounded-full flex items-center justify-center shadow-lg z-10">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-coffeeBrown mt-2 relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm relative z-10">
                {feature.des}
              </p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="-mt-10 sm:-mt-15 px-4 sm:px-0 max-w-6xl mx-auto">
        <img src={featureImage} alt="featureImage" 
        className="w-[90%] max-w-[320px] sm:w-[70%] sm:max-h-175 h-auto object-contain -mb-15 sm:-mb-20 mx-auto  " />
      </div>
    </section>
  );
};

export default Features;
