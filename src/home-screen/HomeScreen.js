import image1 from '../Group.svg';
import image2 from '../Mask group.png';
import image3 from '../Mask group.svg';
import image4 from '../Frame.svg';
import {ReactComponent as Image5} from '../Mask group-2.svg';
import {ReactComponent as Image6} from '../Mask group-3.svg';
import {ReactComponent as Image7} from '../Mask group-4.svg';
import iphone from '../image.svg';
import goals from '../Container.svg';
import stars from '../stars.svg';
import iphone2 from '../iphone2.svg';
import calories from '../calories.svg';
import background from '../Background.svg';
import foodplan from '../food-plan.3b9035b7.svg.svg';
import users from '../users.svg';
import users2 from '../users2.svg';
import iphone3 from '../iphone3.svg';
import margin from '../Margin.svg';
import image from '../brandmark-design 1.svg';


const HomeScreen = () => {
    return (
        // Global Container
        <div className="flex flex-col items-center justify-center min-h-screen space-y-0">

            {/* Card Container */}
            <div className="w-full h-full flex flex-col items-center justify-between p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-40 md:p-12"
                    style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}
            >
    
                 {/* Text and Image Container */}
                 <div className="w-full text-center ml-20">
                    <h2 className="text-sm font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">#1 must-have app for athletes and performers</h2>
                    <h2 className="text-7xl font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Unlock Your Potential</h2>
                    <h2 className="text-sm font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">The all-in-one data-driven performance companion</h2>

                    <button className="bg-[#FFFFFF]  mt-20 w-52 h-12 hover:scale-125 duration-200 text-[#9ABBC6] font-montserrat rounded-full">START TODAY   {'>'}</button>
                </div>


               

                {/* Image Div Container */}
                <div className="w-full">
                    <img src={iphone} alt="" className="hover:scale-105 duration-300 h-auto"/>
                </div>
            </div>



            {/* New Row Container 2 */}
            <div className="w-full flex flex-col items-center p-16 space-y-10 bg-[#ececec] md:space-y-10 md:space-x-10 md:p-12">
                
                <div>
                    <img src={stars} alt="" className="w-52 h-auto hover:scale-105 duration-200"/>
                </div>


                <div className="w-full text-center">
                    <h2 className="text-base font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Join the rapidly growing community of athletes who are using Elite Prep to unlock their potential</h2>
                </div>
                

                <div className="w-full text-center mt-80">
                    <h2 className="text-4xl font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Your 3 Step Journey to Becoming Elite</h2>
                </div>
            </div>

           
           
        

            {/* New Row Container 3 */}
            <div className="w-full flex flex-col items-center p-16 space-y-10 bg-white">

                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">
                    
                    <div className="w-full flex justify-center">
                        <img src={goals} alt="" className="h-auto hover:scale-105 duration-200"/>
                    </div>

                    <div className="w-full text-center md:text-left">
                            <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">1</h2>
                            <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Create a Baseline - Set Goals</h2>
                            <h2 className="text-sm font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">To maximize Elite Prep, schedule your event, establish a baseline with the questionnaire, and set clear performance goals.</h2>
                    </div>
                    
                </div>


                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">

                    <div className="w-full text-center md:text-right">
                        <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">2</h2>
                        <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Prepare</h2>
                        <h2 className="text-sm font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">Track your preparation activities and use the AI chat journal to  reflect, learn, and mentally prepare for your performance.</h2>
                    </div>
                    
                    <div className="w-full flex justify-center">
                        <img src={iphone2} alt="" className=" h-auto hover:scale-105 duration-200"/>
                    </div>
                    
                </div>



                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">
                    
                    <div className="w-full flex justify-center">
                        <img src={calories} alt="" className="h-auto hover:scale-105 duration-200"/>
                    </div>

                    <div className="w-full text-center md:text-left">
                            <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">3</h2>
                            <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Compete - Reflect - Adjust</h2>
                            <h2 className="text-sm font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">Reflect on your performance, analyze the insights, adjust your training, and repeat the process for continuous improvement.</h2>
                    </div>
                    
                </div>

                <div className="w-full flex justify-center">
                    <img src={background} alt="" className="h-80"/>
                </div>

            </div>


            {/* New Row Container 4 */}
            <div className="w-full h-full flex flex-col items-center justify-between p-16 space-y-10 md:space-y-10 md:p-12"
                    style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}>

                <div>
                    <img src={foodplan} alt="" className="h-auto hover:scale-105 duration-200"/>
                </div>

                <div className="w-full text-center">
                    <h2 className="text-4xl font-montserrat bg-white bg-clip-text text-transparent hover:scale-105 duration-200">Unlock your unique performance path</h2>
                </div>

                <div className="w-full text-center">
                    <h2 className="text-xl font-montserrat bg-white bg-clip-text text-transparent hover:scale-105 duration-200">Get the edge with data-driven preparation analysis</h2>
                </div>

            </div>



            {/* New Row Container 5 */}
            <div className="w-full flex flex-col items-center p-16 space-y-10 bg-white">

                <h2 className="text-base font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Become Elite</h2>
                <h2 className="text-4xl font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Preparation tracking works. Elite Prep proves it.</h2>

                <div className="flex flex-row items-center justify-between space-x-28">
                    <img src={users} alt="" className="w-auto h-auto hover:scale-105 duration-200"/>
                    <img src={users2} alt="" className="w-auto h-auto hover:scale-105 duration-200"/>
                </div>
            </div>



            {/* New Row Container 6 */}
            <div className="w-full h-full flex flex-col items-center justify-between p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-40 md:p-12"
                    style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}
            >
    
                 {/* Text and Image Container */}
                 <div className="w-full text-center ml-20">
                    <h2 className="text-sm font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Have 2 minutes?</h2>
                    <h2 className="text-4xl font-montserrat font-thin mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Find out how <span className="font-bold font-montserrat font-white">prepared</span> you <span className="font-bold font-montserrat font-white">REALLY</span> are</h2>
                    
                    <button className="bg-[#FFFFFF]  mt-20 w-52 h-12 hover:scale-125 duration-300 text-[#9ABBC6] font-montserrat rounded-full">TAKE THE QUIZ   {'>'}</button>
                </div>


               

                {/* Image Div Container */}
                <div className="w-full flex items-end">
                    <img src={iphone3} alt="" className="w-auto hover:scale-105 duration-200"/>
                </div>
            </div>



            {/* New Row Container 7 */}
            <div className="w-full flex flex-col items-center bg-white">
                <div className="w-full flex flex-col items-center p-16 space-y-10 bg-white md:flex-row md:space-y-0 md:space-x-10 md:p-12 md:m-10">

                    <div className="flex flex-row items-center space-x-20 m-20">
                        <img src={margin} alt="" className="w-auto h-auto hover:scale-105 duration-200"/>
                    

                        <div className="w-full flex flex-col text-left">
                            <h2 className="text-base font-montserrat bg-black bg-clip-text text-transparent">Our Mission</h2>
                            <h2 className="text-4xl font-montserrat bg-black bg-clip-text text-transparent">Own Your Performance</h2>
                            <p className="mt-5">Mastery is build on preparation. Elite Prep empowers athletes and performers to take control of their performance journey. We provide
                                the tools and insights to foster confident, focused preparation, transforming disorganized efforts into a structored path toward peak
                                performance. By tracking progress, analyzing data, and fostering self-awareness, Elite Prep instills realistic expectations and cultivates
                                personal responsobility for outcomes. We are the constant companion for those seeking improvement, the reliable foundation upon which they
                                build their success.
                            </p>
                        </div>

                    </div>
                    
                </div>

                <div className="flex flex-col text-left ml-52 mr-52 mb-20 mt-96">
                    <h2 className="font-bold font-montserrat bg-black bg-clip-text text-transparent">About Elite Prep</h2>
                    <p className="mt-5 font-thin font-montserrat">
                        Elite Prep is the leading performance preparation app, empowering athletes and performers of all levels
                        to reach their full potential. Users track their training activities, monitor their mental and physical 
                        well-being, and gain personalized insights to optimize their preparation routines. With Elite Prep, athletes
                        and performers are taking control of their performance journey, achieving greater confidence, focus, and 
                        success in their chosen fields. It's not just an activity tracker - it's the ultimate performance companion for 
                        those dedicated to achieving peak performance.
                    </p>
                </div>
            </div>


            {/* Footer */}
            <footer className="w-full flex flex-col items-center p-8 md:space-x-0 md:space-y-20 md:m-10"
                style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}
            >
                
                <div className="w-full flex flex-col items-center justify-between md:flex-row md:space-x-0 md:space-y-5 md:p-12">
                    <div className="flex flex-col space-y-5">
                        <img src={image} alt="Elite Prep Logo" className="w-60 h-20 hover:opacity-75"/>
                        <p className="text-base font-montserrat text-white">Find your healthy, and your happy.</p>
                        <button className="bg-[#FFFFFF] mt-40 w-52 h-12 hover:scale-105 duration-200 text-[#9ABBC6] font-montserrat rounded-full">START TODAY   {'>'}</button>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h2 className="text-base font-bold font-montserrat text-white">Product</h2>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Features</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Pricing</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Testimonials</p>
                    </div>


                    <div className="flex flex-col space-y-5">
                        <h2 className="text-base font-bold font-montserrat text-white">Resources</h2>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Blog</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">FAQ</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Help Center</p>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h2 className="text-base font-bold font-montserrat text-white">Company</h2>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">About Us</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Careers</p>
                        <p className="text-sm font-thin font-montserrat text-white hover:opacity-75">Contact Us</p>
                    </div>

                </div>


                <div className="w-full flex flex-col items-center justify-center text-white">
                    <p className="text-sm font-inter">© 2025 Elite Prep. All rights reserved.</p>
                    <p className="text-sm font-inter">Privacy Policy | Terms of Service</p>
                </div>

               

            </footer>

            
            
        </div>
    )
};
export default HomeScreen;