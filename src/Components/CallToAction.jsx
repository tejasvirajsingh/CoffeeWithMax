const CallToAction = () => {
  return (
    <section className="bg-[#f5f1ee] py-2 px-6 text-center sm:px-12">
      {/* sub heading */}

      <p className="uppercase text-xs tracking-widest text-gray-500 mb-2 font-semibold ">
        Start Your journey.
      </p>

      {/* main heading  */}

      <h2 className="text-3xl sm:text-5xl font-extrabold  text-coffeeBrown  mb-4">
        {" "}
        Get Support
      </h2>

      {/* Description  */}

      <p className="max-w-2xl mx-auto text-gray-600 text-xs px-8 sm:text-lg mb-8 ">
        Join thousand of creator using Ek cup Coffee with max to grow their
        Audiance , and get connect to Community.
      </p>

      {/* creating button  */}

      <a
        href="/signup"
        className="inline-block bg-coffeeBrown text-white font-bold text-xl sm:text-xl px-5 sm:px-4 py-2 sm:py-2
      rounded-full border-2 border-[#BB591C] shadow-[7px_5px_56px_-20px_#BB591C] transition-transform hover:scale-105 duration-200"
      >
        Create Your Page
      </a>
    </section>
  );
};

export default CallToAction;
