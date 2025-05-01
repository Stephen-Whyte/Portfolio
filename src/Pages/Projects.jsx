import { Outlet, Link } from 'react-router-dom'
import Left from "../Components/Left.jsx"
import Widget from "../Components/Widget.jsx"
import Data from "../Utils/Data.js"


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
                    <div className="text-sm text-muted-foreground line-clamp-2">{Props.Info.Desc}</div>
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
                <div className="flex items-center p-3 pt-2 border-t bg-muted/30 justify-between w-full">
                    <a target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-1.5" href="https://github.com/Sah31m"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Code</a>
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs gap-1.5" href={Props.Info.Link}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link h-3.5 w-3.5">
                            <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        View
                    </a>
                </div>
            </div>
        </div>
    )
};

function Homepage(){
    return (
        <div className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            <div className="grow lg:basis-[75%] lg:mt-10">
                <h2 className='text-3xl font-bold mb-2 tracking-tight'>Projects.</h2>
                <a>Take a look at some projects i've contributed/worked on.</a>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        Object.entries(Data.Projects).map(([key, value]) => (
                            <Template Info={value}/>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
};



export default Homepage