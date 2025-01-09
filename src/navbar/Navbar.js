import image from '../ElitePrepLogo.png';

const Navbar = () => {
    return(
        <div className="flex items-center justify-between h-28">
            <img src={image} alt="Elite Prep Logo" className="w-52 h-28 rounded-br-full hover:opacity-85"/>
            <button className="bg-neutral-800 hover:opacity-85 text-gray-400 py-5 px-6 mx-12 my-8 rounded-full">Download</button>
        </div>
    )
}
export default Navbar;