import Data from "../Utils/Data.js"
import Left from "../Components/Left.jsx"
import Masonry from "@mui/lab/Masonry"

function Template(Props){
    return (
        <div className="rounded-xl bg-card text-card-foreground overflow-hidden shadow-md hover:shadow-lg transition-shadow border-0 text-center p-4">
            <img className="flex justify-center w-full h-50 object-cover rounded-t-xl" src={Props.Info.Img} alt={Props.Info.Title} />
            <div className="p-4">
                <h1>{Props.Info.Title}</h1>
                <p>{Props.Info.Desc}</p>
                <p className="text-blue-500">{Props.Info.Date}</p>
                <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs gap-1.5" href={Props.Info.Link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link h-3.5 w-3.5">
                        <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    View
                </a>
            </div>
        </div>

    )
};


function Certificates(){
    return (
        <div className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            <div className="grow lg:basis-[75%] lg:mt-10">
                <h2 className='text-3xl font-bold mb-2 tracking-tight'>Certificates & Achievements.</h2>
                <a>Achievements and Certificates i've garnered throughout my education & career.</a>
                <Masonry 
                    columns={3}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={2}
                    defaultSpacing={1}
                    sequential
                    className="grow lg:basis-[75%]"
                >
                {
                    Object.entries(Data.Certificates).map(([key, value]) => (
                        <Template Info = {value}/>
                    ))
                }
                </Masonry>
            </div>
        </div>
    )
};

export default Certificates;