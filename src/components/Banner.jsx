const Banner = () => {
    return(
        <>
              
              <div className="flex justify-center items-center  py-6 bg-t-blue">
                <div className="py-5">
                <h1 className="text-slate-gray  text-3xl font-bold text-center">Welcome to My Portfolio!</h1>
                <p className="text-center text-steel-gray w-9/12 my-4 mx-auto">Discover my journey in web development and explore my latest projects. I’m excited to share my work with you!</p>
                <div className="text-center">
                    <button className="hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 rounded-md border border-gray-500 shadow-sm text-slate-gray font-bold mt-4 px-6 py-3">Hire Me <i className="fa-light fa-arrow-up-right"></i></button>
                </div>
                
                </div>
            </div>
        </>
    );
} 

export default Banner;