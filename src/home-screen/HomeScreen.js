import image1 from '../Group.svg';
import image2 from '../Mask group.png';
import image3 from '../Mask group.svg';
import image4 from '../Frame.svg';
import {ReactComponent as Image5} from '../Mask group-2.svg';
import {ReactComponent as Image6} from '../Mask group-3.svg';
import {ReactComponent as Image7} from '../Mask group-4.svg';

const HomeScreen = () => {
    return (
        // Global Container
        <div className="flex flex-col items-center justify-center min-h-screen space-y-0">

            {/* Card Container */}
            <div className="w-full h-full flex flex-col p-16 bg-gradient-to-b from-neutral-950 to-neutral-800 space-y-10 md:flex-row
                            md:space-y-0 md:space-x-20 md:p-12"
            >
                 {/* Text and Image Container */}
                 <div className="w-full text-center">
                    <h2 className="text-7xl font-sans mb-4 bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">Using AI to Empower Champions</h2>
                </div>

                {/* Image Div Container */}
                <div className="w-auto">
                    <img src={image2} alt="" className="hover:scale-105 duration-200 w-full h-auto"/>
                </div>
            </div>

            {/* New Row Container 2 */}
            <div className="w-full flex flex-col p-16 space-y-10 bg-[#f0f0f0] md:flex-row md:space-y-0 md:space-x-10 md:p-12">
                
                {/* New Text and Image Container */}
                <div className="w-full text-center">
                    <h2 className="text-7xl font-sans mb-4 bg-gradient-to-r from-slate-400 to-slate-800 bg-clip-text text-transparent hover:scale-105 duration-200">The Tough Realities Behind Athletic Glory</h2>
                    <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 md:space-x-10">
                        <p className="text-2xl font-sans text-slate-800 mt-20 hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">ACCOMPLISHING ATHLETIC GOALS IS CHALLENGING</p>
                        
                        <div className="flex flex-col">
                            <p className="text-2xl font-sans text-slate-800 mt-20 hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">
                                <span className="text-3xl font-bold">25 - 30%</span> of student athletes have anxiety and face other mental health challenges
                            </p>
                            <p className="text-2xl font-sans text-slate-800 mt-6 hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">
                                <span className="text-3xl font-bold">Only 10%</span> of college athletes with known mental health conditions seek care from a mental health professional
                            </p>
                        </div>

                        <p className="text-2xl font-sans text-slate-800 mt-20 hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-72 p-4 rounded-3xl">
                            Students overestimate their athletic abilities by <span className="text-3xl font-bold">6X</span> leading to misaligned expectations and often attributing poor performance
                            to external factors beyond their control...</p>
                        
                    </div>
                   
                </div>
            </div>

            <div className="w-full">
                 {/* Image Div Container */}
                <img src={image4} alt="" className="w-full h-full"/>
            </div>
           
        

            {/* New Row Container 3 */}
            <div className="w-full flex flex-col p-16 space-y-10 bg-[#d3dee2] md:flex-row md:space-y-0 md:space-x-20 md:p-12">
                
                {/* New Text and Image Container */}
                <div className="w-full text-center mb-20">
                    <h2 className="text-7xl font-sans mb-4 bg-gradient-to-r from-slate-400 to-slate-800 bg-clip-text text-transparent hover:scale-105 duration-200">Mental Health Coaching Platform Combined</h2>
                    
                    <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-20 md:space-x-10">

                        <div className="mt-20 hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">
                            <Image5 className="fill-current text-black w-20 h-20 bg-neutral-800 rounded-3xl p-2"/>
                            <h2 className="mt-2 text-2xl text-left font-bold font-sans text-slate-800">First Mover Advantage</h2>
                            <p className="mt-2 text-lg text-left font-sans text-slate-800">The only platform combining AI-powered mental health support and sports-specific advice</p>
                        </div>
                        
                        
                        <div className="hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">
                            <Image6 className="fill-current text-black w-20 h-20 bg-neutral-800 rounded-3xl p-2"/>
                            <h2 className="mt-2 text-2xl text-left font-bold font-sans text-slate-800">For Athletes By Athletes</h2>
                            <p className="mt-2 text-lg text-left font-sans text-slate-800">A former professional athlete-led company with a focus on student-athlete support and performance</p>
                        </div>


                        
                        <div className="hover:scale-105 duration-200 bg-gradient-to-r from-slate-50 to-slate-400 w-60 p-4 rounded-3xl">
                            <Image7 className="fill-current text-black w-20 h-20 bg-neutral-800 rounded-3xl p-2"/>
                            <h2 className="mt-2 text-2xl text-left font-bold font-sans text-slate-800">Clear Benefits for Target Audience</h2>
                            <p className="mt-2 text-lg text-left font-sans text-slate-800">Proprietary algorithm to unlock their full potential and achieve peak performance</p>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            
            
            
        </div>
    )
};
export default HomeScreen;