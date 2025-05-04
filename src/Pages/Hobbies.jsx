import Data from "../Utils/Data.js"
import Left from "../Components/Left.jsx"
import Masonry from "@mui/lab/Masonry"


function Template(Props){
    return (
        <div className=''>
            <div className='rounded-xl bg-card text-card-foreground shadow flex flex-col overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border-0 group'>
                <div className="h-1 w-full bg-gradient-to-r from-accent-green/20 to-accent-green/5"/>
                <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"/>
                    <div className="relative h-full w-full bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <img alt="Crafted" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="w-full h-full object-cover" srcset={`${Props.Info.Img} 1x, ${Props.Info.Img} 2x`} src={Props.Info.Img}/>
                    </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-1">
                    <div className="font-semibold tracking-tight text-xl line-clamp-1">{Props.Info.Title}</div>
                    <div className="text-sm text-muted-foreground">{Props.Info.Desc}</div>
                    <div className="flex flex-wrap gap-2 mt-4'">
                        {
                            Object.entries(Props.Info.Tools).map(([key, value]) => (
                                <li 
                                    className='inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs' >
                                    {value}
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};



function Hobbies(){
    return (
        <div className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            
            <div className="grow lg:basis-[75%] lg:mt-10">
                
                <h2 className='text-3xl font-bold mb-2 tracking-tight'>Hobbies.</h2>
                <a>Some of my hobbies that may or may not relate to my career choice.</a>
                <Masonry 
                    columns={2}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={2}
                    defaultSpacing={1}
                    sequential
                    className="grow lg:basis-[75%]"
                >
                    {
                        Object.entries(Data.Hobbies).map(([key, value]) => (
                            <Template Info = {value}/>
                        ))
                    }
                </Masonry>
            </div>
        </div>
    )
};

export default Hobbies;