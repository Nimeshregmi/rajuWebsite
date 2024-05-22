
const notfound = () => {
    return (
      <div> <div 
      className="
        flex
        items-center
        justify-center
        bg-dark
        w-full h-screen
      "
    >
      <div className="lg:px-40 py-20   rounded-md shadow-md shadow-light">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-light text-9xl">404</h1>
    
          <h6 className="mb-2 text-2xl font-bold text-center text-light md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
    
          <p className="mb-8 text-center text-light md:text-lg">
            The page you’re looking for doesn’t exist or hasnot been completed.
          </p>
    
          <a
            href="/"
            className="px-6 bg-primaryDark rounded-xl hover:bg-light hover:text-dark py-2 text-sm font-semibold text-light bg-blue-100"
            >Go home</a
          >
        </div>
      </div>
  </div>
  
  </div>
    )
  }
  
  export default notfound