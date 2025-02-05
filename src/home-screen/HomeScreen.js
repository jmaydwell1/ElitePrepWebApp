import image1 from '../Group.svg';
import image2 from '../Mask group.png';
import image3 from '../Mask group.svg';
import image4 from '../Frame.svg';
import { ReactComponent as Image5 } from '../Mask group-2.svg';
import { ReactComponent as Image6 } from '../Mask group-3.svg';
import { ReactComponent as Image7 } from '../Mask group-4.svg';
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
import iphone from '../image 1.png';
import icon from '../path4.svg'
import s2image1 from '../s2image1.svg';
import s2image2 from '../s2imag2.svg';
import s2image3 from '../s2image3.svg';
import path4 from '../path4-2.svg';
import epihone from '../epiphone.svg';
import s4image1 from '../s4image1.svg';
import image7 from '../image 7.svg';
import image8 from '../image 8.svg';
import image9 from '../image 9.svg';
import arrow from '../icon-arrow.svg';
import { useState } from 'react';


const HomeScreen = () => {
    const [openAccordions, setOpenAccordions] = useState([false, false, false, false, false]);  

    const toggleAccordion = (index) => {
        setOpenAccordions(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }



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
                    <h2 className="text-7xl font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Unlock Your <span className="bg-white mt-10 text-black font-montserrat font-thin">Potential</span></h2>
                    <h2 className="text-sm font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">The all-in-one data-driven performance companion</h2>

                    <button className="bg-[#FFFFFF]  mt-20 w-52 h-12 hover:scale-125 duration-200 text-[#9ABBC6] font-montserrat rounded-full">START TODAY   {'>'}</button>
                </div>




                {/* Image Div Container */}
                <div className="w-full">
                    <img src={iphone} alt="" className="hover:scale-105 duration-300 h-auto" />
                </div>
            </div>



            {/* New Row Container 2 */}
            <div className="w-full flex flex-col items-center p-16 space-y-10 bg-[#ececec] md:space-y-10 md:space-x-10 md:p-12">

                <div>
                    <img src={stars} alt="" className="w-52 h-auto hover:scale-105 duration-200" />
                </div>


                <div className="w-full text-center">
                    <h2 className="text-xl font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Join the rapidly growing community of athletes who are using Elite Prep to unlock their potential</h2>
                </div>

            </div>





            {/* New Row Container 3 */}
            <div className="w-full flex flex-col items-center p-16 bg-white">

                <img src={icon} alt="" className="h-auto mb-10 hover:scale-105" />

                <div className="w-full text-center mt-10 mb-10">
                    <h2 className="text-4xl font-montserrat bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Your 3 Step Journey to Becoming Elite</h2>
                </div>

                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">

                    <div className="w-full flex justify-center">
                        <img src={s2image1} alt="" className="h-auto hover:scale-105 duration-200" />
                    </div>

                    <div className="w-full text-center md:text-left">
                        <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">1</h2>
                        <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Create a Baseline - Set Goals</h2>
                        <h2 className="text-base font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">To maximize Elite Prep, schedule your event, establish a baseline with the questionnaire, and set clear performance goals.</h2>
                    </div>

                </div>


                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">

                    <div className="w-full text-center md:text-right">
                        <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">2</h2>
                        <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Prepare</h2>
                        <h2 className="text-base font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">Track your preparation activities and use the AI chat journal to  reflect, learn, and mentally prepare for your performance.</h2>
                    </div>

                    <div className="w-full flex justify-center">
                        <img src={s2image2} alt="" className=" h-auto hover:scale-105 duration-200" />
                    </div>

                </div>



                <div className="w-full flex flex-col items-center p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-20 md:p-12">

                    <div className="w-full flex justify-center">
                        <img src={s2image3} alt="" className="h-auto hover:scale-105 duration-200" />
                    </div>

                    <div className="w-full text-center md:text-left">
                        <h2 className="text-7xl font-inter mb-5 bg-[#B7CDD4] bg-clip-text text-transparent hover:scale-105 duration-200">3</h2>
                        <h2 className="text-4xl font-montserrat mt-5 bg-black bg-clip-text text-transparent hover:scale-105 duration-200">Compete - Reflect - Adjust</h2>
                        <h2 className="text-base font-montserrat mt-5 bg-gray-600 bg-clip-text text-transparent hover:scale-105 duration-200">Reflect on your performance, analyze the insights, adjust your training, and repeat the process for continuous improvement.</h2>
                    </div>

                </div>

                <div className="w-full flex justify-center mt-10">
                    <img src={background} alt="" className="h-80" />
                </div>

            </div>


            {/* New Row Container 4 */}
            <div className="w-full h-full flex flex-col items-center justify-between p-16 space-y-10 md:space-y-10 md:p-12"
                style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}>

                <div>
                    <img src={path4} alt="" className="h-auto hover:scale-105 duration-200" />
                </div>

                <div className="w-full text-center">
                    <h2 className="text-4xl font-montserrat bg-white bg-clip-text text-transparent hover:scale-105 duration-200">Unlock your unique performance path</h2>
                </div>

                <div className="w-full text-center">
                    <h2 className="text-xl font-montserrat bg-white bg-clip-text text-transparent hover:scale-105 duration-200">Get the edge with data-driven preparation analysis</h2>
                </div>

            </div>



            {/* New Row Container 5 */}
            <div className="w-full flex flex-col items-center p-14 space-y-0 bg-white">

                <div className="w-full flex flex-col justify-items-start ml-32">
                    <h2 className="text-4xl font-montserrat mb-12 bg-black bg-clip-text text-transparent"> <span className="font-bold">Never</span> Feel <span className="font-bold">Unprepared</span> Again</h2>
                </div>


                <div className="flex flex-col items-center lg:flex-row">

                    <div className="flex flex-col items-center">
                        <div className="w-auto h-auto bg-[#D9D9D9] p-5 rounded-2xl">
                            <img src={image7} alt="" className="w-72 h-72 object-contain hover:scale-105 duration-200" />
                        </div>

                        <h2 className="text-xl font-montserrat font-bold mt-5">Conquer Your Next Big Event</h2>
                        <p className="text-sm font-montserrat mt-5 m-8">We offer personalized tools and insights for improved training,
                            mental game management, and readiness. With features like activity tracking, AI journaling, and performance analysis,
                            Elite Prep helps you achieve peak performance when it matters most.
                        </p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-auto h-auto bg-[#D9D9D9] p-5 rounded-2xl">
                            <img src={image8} alt="" className="w-72 h-72 hover:scale-105 duration-200" />
                        </div>

                        <h2 className="text-xl font-montserrat font-bold mt-5">Performance Now Measurable</h2>
                        <p className="text-sm font-montserrat mt-5 m-8">
                            For too long, "soft skills" like focus, confidence, and resilience have been seen as subjective.
                            Elite Prep changes that by measuring these aspects of performance. By combining advanced technology
                            with sports psychology, we quantify your mental and emotional state alongside physical training.
                        </p>

                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-auto h-auto bg-[#D9D9D9] p-5 rounded-2xl">
                            <img src={image9} alt="" className="w-72 h-72 object-contain hover:scale-105 duration-200" />
                        </div>

                        <h2 className="text-xl font-montserrat font-bold mt-5">From Confusion to Clarity</h2>
                        <p className="text-sm font-montserrat mt-5 m-8">
                            Stop second-guessing your training. Elite Prep offers personalized, data-driven insights that
                            clarify the factors impacting your performance, from physical training to mental and emotional
                            well-being. Discover your unique path to peak performance, gaining the clarity and confidence you
                            need to excel.
                        </p>
                    </div>
                </div>
            </div>



            {/* New Row Container 6 */}
            <div className="w-full h-full flex flex-col items-center justify-between p-16 space-y-10 md:flex-row md:space-y-0 md:space-x-40 md:p-12"
                style={{ background: 'linear-gradient(to bottom left, #000000, #000000, #7B939C)' }}
            >

                {/* Text and Image Container */}
                <div className="w-full flex flex-col items-center text-center ml-52">
                    <h2 className="text-sm font-montserrat mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Have 2 minutes?</h2>
                    <h2 className="text-4xl font-montserrat font-thin mb-4 bg-[#F0F0F0] bg-clip-text text-transparent hover:scale-105 duration-200">Find out how <span className="font-bold font-montserrat font-white">prepared</span> you <span className="font-bold font-montserrat font-white">REALLY</span> are</h2>

                    <button className="bg-[#FFFFFF]  mt-20 w-52 h-12 hover:scale-125 duration-300 text-[#9ABBC6] font-montserrat rounded-full">TAKE THE QUIZ   {'>'}</button>
                </div>




                {/* Image Div Container */}
                <div className="w-full flex items-end">
                    <img src={epihone} alt="" className="w-auto h-auto hover:scale-105 duration-200" />
                </div>
            </div>



            {/* New Row Container 7 */}
            <div className="w-full flex flex-col items-center bg-white">
                <div className="w-full flex flex-col items-center p-16 space-y-10 bg-white md:flex-row md:space-y-0 md:space-x-10 md:p-12 md:m-10">

                    <div className="flex flex-row items-center space-x-20 m-20">
                        <img src={s4image1} alt="" className="w-96 h-auto hover:scale-105 duration-200" />


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

                <div className="w-full flex flex-col items-center mt-40 mb-32">
                    <h2 className="text-4xl font-montserrat bg-black bg-clip-text text-transparent">Q & A</h2>

                    {/* Image Div Container */}
                    <div className="w-1/2">

                        {/* FAQ Accordion*/}
                        <section id="faq-accordion">

                            {/* Main Container */}
                            {/* <div className="container mx-auto px-6 mb-32"> */}

                            {/* Accordion Container */}
                            <div className="w-full m-8 mx-auto overflow-hidden">

                                {/* Tab 1*/}
                                <div className="py-1 border-b outline-none group" tabIndex="0" onClick={() => toggleAccordion(0)}>

                                    {/* Tab flex container */}
                                    <div className="flex items-center justify-between py-3 text-gray-500
                                                transition duration-500 cursor-pointer group ease"
                                    >

                                        {/* Tab Title */}
                                        <div className={`transition duration-500 ease ${openAccordions[0] ? 'text-[#9ABBC6]' : 'text-neutral-800'} group-hover:text-[#9ABBC6]`}>
                                            What does Elite Prep offer athletes and performers?
                                        </div>

                                        {/* Arrow */}
                                        <div className={`transition duration-500 ease ${openAccordions[0] ? 'rotate-180' : ''}`}>
                                            <img src={arrow} />
                                        </div>

                                    </div>

                                    {/* Inner Content */}
                                    <div className={`overflow-hidden transition duration-500 ${openAccordions[0] ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-neutral-600 px-4">
                                            ElitePrep offers athletes and performers a comprehensive platform
                                            combining AI-powered mental health support, personalized performance
                                            tracking, and data-driven insights to optimize preparation and achieve peak
                                            performance. It provides tools for activity logging, mental health
                                            monitoring, and progress tracking, along with AI-driven guidance and
                                            resources to enhance mental preparedness and sports psychology
                                        </p>
                                    </div>




                                </div>

                                {/* Tab 2 */}
                                <div className="py-1 border-b outline-none group" tabIndex="1" onClick={() => toggleAccordion(1)}>

                                    {/* Tab flex container */}
                                    <div className="flex items-center justify-between py-3 text-gray-500
                                                transition duration-500 cursor-pointer group ease"
                                    >

                                        {/* Tab Title */}
                                        <div className={`transition duration-500 ease ${openAccordions[1] ? 'text-[#9ABBC6]' : 'text-neutral-800'}  group-hover:text-[#9ABBC6]`}>
                                            How do I track my training activites and workouts with Elite Prep?
                                        </div>

                                        {/* Arrow */}
                                        <div className={`transition duration-500 ease ${openAccordions[1] ? 'rotate-180' : ''}`}>
                                            <img src={arrow} />
                                        </div>

                                    </div>

                                    {/* Inner Content */}
                                    <div className={`overflow-hidden transition duration-500 ${openAccordions[1] ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-neutral-600 px-4">
                                            Elite Prep offers flexible options for tracking your training activities and
                                            workouts. You can log activities live during your session, capturing real-time
                                            data and insights, or manually add them after you've finished practicing.
                                            The app tracks a wide range of sport-specific activities, allowing you to
                                            record detailed information relevant to your performance. For physiological
                                            data like heart rate and calories burned, Elite Prep seamlessly syncs with
                                            popular fitness trackers and smartwatches, providing a comprehensive view
                                            of your training. Monitor your progress in the performance dashboard,
                                            analyze trends, and gain personalized insights from Elite Prep's AI
                                            algorithms to optimize your training plan and achieve your goals
                                        </p>
                                    </div>

                                </div>

                                {/* Tab 3 */}
                                <div className="py-1 border-b outline-none group" tabIndex="2" onClick={() => toggleAccordion(2)}>

                                    {/* Tab flex container */}
                                    <div className="flex items-center justify-between py-3 text-gray-500
                                                    transition duration-500 cursor-pointer group ease"
                                    >

                                        {/* Tab Title */}
                                        <div className={`transition duration-500 ease ${openAccordions[2] ? 'text-[#9ABBC6]' : 'text-neutral-800'}  group-hover:text-[#9ABBC6]`}>
                                            Beyond activities, what other factors can I track to
                                            improve my performance with Elite Prep?
                                        </div>

                                        {/* Arrow */}
                                        <div className={`transition duration-500 ease ${openAccordions[2] ? 'rotate-180' : ''}`}>
                                            <img src={arrow} />
                                        </div>

                                    </div>

                                    {/* Inner Content */}
                                    <div className={`overflow-hidden transition duration-500 ${openAccordions[2] ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-neutral-600 px-4">
                                            Elite Prep helps you understand the full picture of your performance by
                                            focusing on the 5 pillars of performance health: focus, confidence,
                                            enjoyment, pressure, and motivation. Track these metrics and gain insights
                                            into how they impact your training. Elite Prep also breaks down sport-
                                            specific skill practice at a granular level, showing exactly how you're
                                            spending your practice time. By combining this with activity tracking and
                                            performance health monitoring, you gain a comprehensive view of your
                                            performance and can make data-driven decisions to achieve your goals
                                        </p>
                                    </div>

                                </div>


                                {/* Tab 4 */}
                                <div className="py-1 border-b outline-none group" tabIndex="3" onClick={() => toggleAccordion(3)}>

                                    {/* Tab flex container */}
                                    <div className="flex items-center justify-between py-3 text-gray-500
                                                    transition duration-500 cursor-pointer group ease"
                                    >

                                        {/* Tab Title */}
                                        <div className={`transition duration-500 ease ${openAccordions[3] ? 'text-[#9ABBC6]' : 'text-neutral-800'}  group-hover:text-[#9ABBC6]`}>
                                            How does Elite Prep establish a baseline for my performance?
                                        </div>

                                        {/* Arrow */}
                                        <div className={`transition duration-500 ease ${openAccordions[3] ? 'rotate-180' : ''}`}>
                                            <img src={arrow} />
                                        </div>

                                    </div>

                                    {/* Inner Content */}
                                    <div className={`overflow-hidden transition duration-500 ${openAccordions[3] ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-neutral-600 px-4">
                                            Elite Prep establishes a baseline for your performance by assessing your
                                            current abilities and tracking your activities. You'll begin with a baseline
                                            questionnaire that measures your starting point in the 5 pillars of
                                            performance health: focus, confidence, enjoyment, pressure, and
                                            motivation. The app then analyzes your initial activity logging, including the
                                            types of activities, their duration and intensity, and how those activities
                                            impact your performance health. This allows Elite Prep to get a ga uge of
                                            your performance across the 5 pillars for each skill and drill you work on.
                                            By combining this data, Elite Prep creates a comprehensive baseline,
                                            allowing you to track your progress, understand how you're improving, and
                                            receive personalized insights and recommendations
                                        </p>
                                    </div>

                                </div>




                                {/* Tab 5 */}
                                <div className="py-1 border-b outline-none group" tabIndex="4" onClick={() => toggleAccordion(4)}>

                                    {/* Tab flex container */}
                                    <div className="flex items-center justify-between py-3 text-gray-500
                                                    transition duration-500 cursor-pointer group ease"
                                    >

                                        {/* Tab Title */}
                                        <div className={`transition duration-500 ease ${openAccordions[4] ? 'text-[#9ABBC6]' : 'text-neutral-800'}  group-hover:text-[#9ABBC6]`}>
                                            Can I track my training progress and mental health trends
                                            with Elite Prep?
                                        </div>

                                        {/* Arrow */}
                                        <div className={`transition duration-500 ease ${openAccordions[4] ? 'rotate-180' : ''}`}>
                                            <img src={arrow} />
                                        </div>

                                    </div>

                                    {/* Inner Content */}
                                    <div className={`overflow-hidden transition duration-500 ${openAccordions[4] ? 'max-h-screen' : 'max-h-0'}`}>
                                        <p className="text-neutral-600 px-4">
                                            Absolutely! Elite Prep is designed to provide a comprehensive view of
                                            your performance, and that includes detailed tracking of both your training
                                            progress and mental health trends. You can log your activities, including
                                            sport-specific skills and drills, and monitor your progress across the 5
                                            pillars of performance health: focus, confidence, enjoyment, pressure, and
                                            motivation. The app allows you to see how your training impacts these
                                            pillars, giving you a deeper understanding of your overall performance.
                                            Elite Prep also offers daily health assessments and AI-powered analysis to
                                            track your mental and emotional well-being over time. By combining this
                                            data with your activity logs, you can identify trends, understand how your
                                            mental state influences your training, and make data-driven decisions to
                                            optimize your preparation. With Elite Prep, you gain a holistic view of your
                                            performance journey, empowering you to achieve your goals with greater
                                        </p>
                                    </div>

                                </div>





                            </div>

                            {/* </div> */}
                        </section>
                    </div>
                </div>

                <div className="flex flex-col text-left ml-52 mr-52 mb-20">
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
                        <img src={image} alt="Elite Prep Logo" className="w-60 h-20 hover:opacity-75" />
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