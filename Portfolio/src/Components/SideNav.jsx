import Signa from "../Images/Signature.png"




function Container(Props){

    let Padding = Props.Cat == "Content" ? "border-t" : "p-0"
    console.log(Padding)

    return (
        <div className = {`Navigation inline w-full h-full ${Padding}`}>

        </div>
    )
}

function NavHeading(Props){
    return (
        <h1 className="text-2xl font-normal text-PText hover:text-SText transition-colors duration-300">
            {Props.Text}
        </h1>
    )
}

function SC(Props){
    return(
        <h3 className = "text-SText">
            {Props.Text}
        </h3>
    )
}

function Subheading(Props){
    return(
        <h3 className = "text-PText hover:text-SText transition-colors duration-300">
            {Props.Text}
        </h3>
    )
}

function SideNav(){
    return (
        <div className = "Sidebar w-[13%] h-screen border-t border-Secondary border-r py-6 flex flex-col space-y-0.5 justify-left items-left "> 

        <div className = "pl-6 flex flex-col space-y-3">
            <Container Cat = "Nav flex center"/>
            <img src={Signa} alt="Signature" className = "w-[7rem] h-[4rem] bg-SText rounded-lg"/>
            <NavHeading Text = "ABOUT ME"/>
            <NavHeading Text = "SKILLS"/>
            <NavHeading Text = "CV"/>
            <br></br>
        </div>
        
        <div className = "pl-6 flex flex-col space-y-3 border-t-[1px]">
            <Container Cat = "Shortcut flex center"/>
            <SC className = "text-TText" Text = "WEB DEVELOPMENT"/>
            <Subheading Text = "Project 1"/>
            <Subheading Text = "Project 2"/>
            <br/>
            <SC className = "text-TText" Text = "GAME DEVELOPMENT"/>
            <Subheading Text = "Project 1"/>
            <br></br>
        </div>

        <div className = "pl-6 flex flex-col space-y-3 border-t-[1px]">
            <Container Cat = "Shortcut flex center"/>
            <SC Text = "CONTACT"/>
            <Subheading Text = "Email"/>
            <Subheading Text = "LinkedIn"/>
            <Subheading Text = "GitHub"/>
            <br></br>
        </div>
            
        </div>
    )
}


export default SideNav