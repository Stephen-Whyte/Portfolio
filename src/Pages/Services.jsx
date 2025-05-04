import Data from "../Utils/Data.js"
import Left from "../Components/Left.jsx"
import Widget from "../Components/Widget.jsx"



function Services(){
    return (
        <div className="relative scroll-smooth min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            
            <div className="grow lg:basis-[75%] lg:mt-10">
                <h2 className='text-3xl font-bold mb-2 tracking-tight '>What I Offer.</h2>
                <a>Explore the different ways I can contribute to projects, bringing technical skill, creativity, and problem-solving to the table.</a>
                <div className="grid grid-cols-3 gap-4">
                    {
                    Object.entries(Data.Services).map(([key, value]) => (
                            <Widget className="flex flex-col py-6 bg-black/10 p-2 rounded-xl bg-card text-card-foreground shadow overflow-hidden border-0 shadow-soft hover:shadow-soft-lg transition-shadow">
                                <h2 className="text-2xl font-bold mb-2">{value.Title}</h2>
                                <div className="flex flex-col gap-4">
                                    <i className={`${value.Icon} fa-5x`}></i>
                                </div>
                            </Widget>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;