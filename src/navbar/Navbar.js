import image from '../brandmark-design 1.svg';

const Navbar = () => {
    return(
        <div className="flex items-center justify-between h-28">
            <img src={image} alt="Elite Prep Logo" className="mx-6 w-60 h-60 hover:opacity-75"/>
            {/* <button className="bg-neutral-800 hover:opacity-85 text-gray-400 font-sans py-5 px-6 mx-12 my-8 rounded-full">JOIN NOW</button> */}
        </div>
    )
}
export default Navbar;