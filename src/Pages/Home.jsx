import { Outlet, Link } from 'react-router-dom'
import Left from "../Components/Left.jsx"
import Widget from "../Components/Widget.jsx"
import Data from "../Utils/Data.js"
import Masonry from "@mui/lab/Masonry"

function Homepage(){
    return (
        <div className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            <Masonry 
                columns={2}
                spacing={2}
                defaultHeight={450}
                defaultColumns={2}
                defaultSpacing={1}
                sequential
                className="grow lg:basis-[75%]"
            >

                <Widget id="Project-Panel" className="col-span-1 lg:col-span-2 relative">
                    <video
                        className="h-[250px] w-full object-cover rounded-3xl"
                        autoPlay
                        loop
                        muted
                        src="https://us-east-1-bucket-video.s3.amazonaws.com/clip.mp4"
                    />
                    <Link to="/Projects" className="bg-opacity-55 flex justify-center items-center w-full h-full rounded-3xl z-2 absolute font-semibold text-lg text-white">
                        View Projects
                    </Link>
                </Widget>

                <Widget className="flex flex-col py-6">
                    <a className="font-semibold text-lg text-white">Toolkit</a>
                    <div className="w-[75%] flex flex-wrap gap-4 justify-center items-center py-4">
                        {Object.entries(Data.Stack).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center justify-center">
                            <img
                                className="object-cover !m-0 !p-0 object-top rounded-full sm:h-20 sm:w-20 h-16 w-16 border-2 border-black relative transition duration-500 bg-white"
                                src={value.Img}
                            />
                            <p className="text-center text-white">{key}</p>
                            </div>
                        ))}
                    </div>
                </Widget>
                
                <Widget className="flex flex-col py-6 min-h-[100px]">
                    <Link to="/Services" className='absolute inset-0 flex items-center justify-center font-semibold text-lg text-white'>
                        {"<What I Offer/>"}
                    </Link>
                </Widget>

                <Widget className="flex flex-col py-6 min-h-[100px]">
                    <Link to="/Certificates" className='absolute inset-0 flex items-center justify-center font-semibold text-lg text-white'>
                        Certificates & Achievements
                    </Link>
                </Widget>

                <Widget 
                    className="justify-center text-2xl font-bold text-white flex flex-col py-6 min-h-[100px] "
                    style={{
                        backgroundImage: "url('../../Public/Images/Experience.gif')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Link to="/Experience" className='absolute inset-0 flex items-center justify-center font-semibold text-lg text-white'>Experience</Link>
                </Widget>

                <Widget 
                    className="justify-center text-2xl font-bold text-white flex flex-col py-6 min-h-[100px] "
                    style={{
                        backgroundImage: "url('../../Public/Images/Hobbies.gif')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Link to="/Experience" className='absolute inset-0 flex items-center justify-center font-semibold text-lg text-white'>Hobbies</Link>
                </Widget>
                
                <Widget className="flex flex-col py-6">
                    <a className="font-semibold text-lg text-white">GOALS</a>
                    <div className="w-[75%] flex flex-wrap gap-4 justify-center items-center py-4">
                        {Object.entries(Data.Goals).map(([key, value]) => (
                            <label 
                                key={key} 
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg cursor-pointer transition hover:bg-white/20"
                            >
                                <input 
                                    type="checkbox" 
                                    disabled="disabled" 
                                    className="accent-green-500 w-5 h-5"
                                />
                                <span className="text-white">{value}</span>
                            </label>
                        ))}
                    </div>
                </Widget>

            </Masonry>
        </div>
    )
};

export default Homepage