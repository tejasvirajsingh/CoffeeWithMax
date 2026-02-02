import publishImage from "../assets/publish.png";


const Publish = () => {
  return (
    <section className="bg-[#f5f1ee] py-2 px-6 text-center sm:px-12">
     
     {/* sub heading */}

     <p className="uppercase text-xs tracking-widest text-gray-500 mb-2 font-semibold ">Content , Audio and Stories.</p>

     {/* main heading  */}

     <h2 className="text-3xl sm:text-5xl font-extrabold  text-coffeeBrown  mb-4"> Start Publishing</h2>

     {/* Description  */}

     <p className="max-w-2xl mx-auto text-gray-600 text-xs px-8 sm:text-lg mb-8 ">Ek cup coffee help to creator publish authentic stories , behind-the-scenes moment, </p>


     {/* final imgae  */}

     <div className="max-w-182.5 mx-auto">
      <img src={publishImage} className="w-full h-auto rounded-xl " />
     </div>



    </section>
  )
}

export default Publish
