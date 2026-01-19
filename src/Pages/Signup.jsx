const Signup = () => {
  return (
    <div>
      {/* Only for Desktop  */}

      <div className="">
        {/* Logo  */}
        <div className="pt-4 flex items-center gap-2">
          <Link to="/"> 
          <img src={logo} alt="Coffeecup" className="w-8 h-8 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
