const HomeScreen2 = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute top-full left-0 w-full flex flex-col p-16 m-2 space-y-10 md:flex-row
                            md:space-y-0 md:space-x-20 md:m-4 md:p-12 "
            >
                {/* Text and Image Container */}
                <div className="w-full text-center">
                    <h2 className="text-7xl font-sans mb-4 text-gray-400 hover:scale-105 duration-200">The Tough Realities Behind Athletic Glory</h2>
                    {/* <img src={image1} alt="" className="w-full mx-auto overflow-hidden hover:opacity-75"/> */}
                </div>
                                
            </div>
        </div>
    );
};
export default HomeScreen2;