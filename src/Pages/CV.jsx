import Data from "../Utils/Data.js"
import Left from "../Components/Left.jsx"
import Masonry from "@mui/lab/Masonry"

var Base_URL = import.meta.env.BASE_URL;


function Certificates(){
    return (
        <div className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            <div className="grow lg:basis-[75%] lg:mt-10">
                <h2 className='text-3xl font-bold mb-2 tracking-tight'>My CV.</h2>
                <a>CV, Resume, whatever you call it just have a look.</a>
                <iframe
                    src = {Base_URL + "Documents/CV.pdf"}
                    width="100%"
                    height="900px"

                />
            </div>
        </div>
    )
};

export default Certificates;