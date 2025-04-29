export default function Widget(Props){
    return(
        <div 
            className = {`transition-transform duration-300 ease-in-out hover:scale-[1.02] bg-black/30 break-inside-avoid relative flex flex-col rounded-3xl items-center m-2 gap-3 ${Props.className}`}
            style = {Props.style}
        >
            {Props.children}
        </div>
    )
}