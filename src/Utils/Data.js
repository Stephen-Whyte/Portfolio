var Base_URL = import.meta.env.BASE_URL;

const Data = {
    About : "Tech professional skilled in programming, troubleshooting, analyst and support. Experienced in Hardware, network setup, and programming with a strong background in LUAU, Python, JavaScript and SQL. Adept at collaboration and dedicated to continuous learning, eager to contribute to innovative projects and teamsuccess.",
    Github : "https://github.com/Sah31m",
    LinkedIn : "https://www.linkedin.com/in/stephen-whyte-96501b236/",
    Email : "saheimwhyte@gmail.com",
    Traits : [
        "Adaptable",
        "Collaborative",
        "Creative",
        "Curious",
        "Dedicated",
        "Detail-Oriented",
        "Empathetic",
        "Flexible",
        "Innovative",
        "Motivated",
        "Organized",
        "Passionate",
        "Problem-Solver",
        "Responsible",
        "Self-Motivated",
        "Team-Oriented",
        "Time-Management",
        "Versatile",
        "Work-Ethic",
    ],
    Stack : {
        Adobe : {
            Desc : "Test",
            Img : "/Images/AdobeLogo.png",
        },
        Bootstrap : {
            Desc : "Test",
            Img : "Images/Bootstrap.jpeg",
        },
        Excel : {
            Desc : "Test",
            Img : "Images/ExcelLogo.jpg",
        },
        Github : {
            Desc : "Test",
            Img : "Images/GithubLogo.png",
        },
        Jira : {
            Desc : "Test",
            Img : "Images/JiraLogo.svg",
        },
        React : {
            Desc : "Test",
            Img : "Images/ReactLogo.png",
        },
        ["Lua / LuaU"] : {
            Desc : "Test",
            Img : "Images/LuaLogo.png",
        },
        VSC : {
            Desc : "Test",
            Img : "Images/VSCLogo.png",
        }

    },
    Experiences : [
        {
            Position: "Game Developer",
            Company: "Freelance",
            Date: "January 2019 - Present",
            Location: "Remote / London, UK",
            Desc: "When an hobby becomes work, it's a dream come true. I've been developing games on Roblox for over 4 years, and I'm proud to say that I've contributed to games that have collectively amassed over 250 million plays.",
            Skills: ["Luau", "Roblox Studio", "GitHub", "Visual Studio Code", "Team Collaboration"],
            Achievements: [
                "Contributed to 3 Roblox games totaling 250M+ plays.",
                "Increased user engagement by over 160% through custom game mechanics.",
                "Optimized code, reducing execution time by 38% for improved performance."
            ],
        },
        {
            Position: "Assistant Field Engineer",
            Company: "OpenReach & Private Hires",
            Date: "March 2022 – October 2024",
            Location: "London, UK",
            Desc: "Shadowed a Senior Field Engineer, gaining hands-on experience in networking, infrastructure, and stakeholder management.",
            Skills: ["Networking", "Infrastructure", "Stakeholder Communication", "Performance Testing"],
            Achievements: [
                "Assisted Senior Field Engineer, with installation and maintenance of networking infrastructure and hardware.",
                "Rewired telecom post to support renovation.",
                "Configured and tested a small network consisting of several telephones for a startup company."
            ],
        },
        {
            Position: "Undergraduate Software Engineering BSc (Hons)",
            Company: "Nottingham Trent University",
            Date: "September 2021 - February 2022",
            Location: "Nottingham, UK",
            Desc: "Studied key modules including Computer Science Programming, Systems Analysis, and Professional Development for Industry before choosing to leave in order to pursue full-time practical experience and real-world projects.",
            Skills: ["Python", "Systems Analysis", "Project Management", "Problem Solving", "Professional Development","Access"],
            Achievements: [
                "Completed foundational modules in Computer Science and Systems Analysis.",
                "Developed key industry skills through coursework and collaborative projects.",
                "Gained clarity on career goals and transitioned into hands-on, real-world experience early."
            ],
        },
        {
            Position: "IT Technician",
            Company: "J.R Quintess",
            Date: "December 2019 - March 2020",
            Location: "London, UK",
            Desc: "Provided first-line support for a start up comany for haradware, software and helping maintain a running office and improving efficiency though process improvements.",
            Skills: ["Troubleshooting", "Hardware", "Process Improvement", "Stakeholder Engagement", "Operational Efficiency", "Technical Support"],
            Achievements: [
                "Resolved 5+ daily IT support tickets with a 95% first-time fix rate.",
                "Provided first-line technical support to staff, resolving hardware and software issues.",
                "Supported and advised on approaches to improve processes and systems, increasing operational efficiency and a 10% reduction in errors."
            ],
        },
        {
            Position : "A-Levels",
            Company : "King Solomon Sixth Form",
            Date : "2019 - 2021",
            Location : "London, UK",
            Desc : "I pursued A-Levels in Business Studies, Engineering, and Computer Science, developing a strong blend of technical, analytical, and strategic thinking skills. These subjects helped me build a foundation in problem-solving, project management, and digital innovation.",
            Skills : ["Python", "SQL", "Github", "VSC", "Excel", "Adobe", "Adobe Photoshop",],
            Achievements : [
                "Computer Science & Internal Exclusions Prefect.",
                "Built a fully functioning database-driven application as part of coursework.",
                "Developed and presented a full business plan for a startup idea, achieving top marks.",
            ],
        },
        {
            Position : "GCSE",
            Company : "King Solomon High School",
            Date : "2014 - 2019",
            Location : "London, UK",
            Desc : "I attended King Solomon High School, where I studied for my GCSEs. Alongside my core subjects, I chose to specialize in Computer Science, Design and Technology, and History, developing both my technical skills and critical thinking during this time.",
            Skills : ["Scratch","SQL","Python","Repl.it","Word","Excel","PowerPoint","Microsoft Teams","2D Design"],
            Achievements : [
                "Recognized for outstanding effort in History, demonstrating strong research and essay-writing skills.",
                "Built a functional robot for Design & Technology coursework.",
                "Led a team project to design and present a computer science game prototype.",
            ],
        },
    ],
    Projects : [
        {
            Title : "Weather Forecast App",
            Desc : "A basic weather forecast app that displays the current weather conditions for a given location. The app uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.",
            Img : Base_URL + "Images/WeatherForecasterBG.png",
            Link : "https://github.com/Sah31m/Weather-Forecast",
            Tools : ["Python", "GitHub", "Visual Studio Code", "OpenWeatherMap API", "TKinter"],
        },
        {
            Title : "Arch - Hierarchial State Machine",
            Desc : "Arch is a LuaU/Lua state machine library for Roblox that allows you to create hierarchical state machines for your game objects.",
            Img : Base_URL + "Images/StateMachingBG.png",
            Link : "https://github.com/bohraz/Arch",
            Tools : ["LuaU/Lua", "GitHub", "Visual Studio Code","Roblox Studio", "Discord", "Wally"],
        },
        {
            Title : "Anime Story",
            Desc : "Anime  Story is a successful Roblox game that has almost 20 million experience. I developed on the dungeon system working with testers and exploiters.",
            Img : Base_URL + "Images/AnimeStoryBG.png",
            Link : "https://www.roblox.com/games/9417197334",
            Tools : ["LuaU/Lua", "GitHub", "Visual Studio Code","Roblox Studio", "Discord", "Wally"],
        },
    ],
    Goals : [
        "Learn one new major framework (e.g., Next.js, Three.js, Svelte).",
        "Become proficient in my position for American Football.",
        "Secure a tech role to grow my skills."
    ],
    Services : [
        {
            Title : "Web Development",
            Icon : "fa-brands fa-internet-explorer",
        },
        {
            Title : "Software Development",
            Icon : "fa-brands fa-windows",
        },
        {
            Title : "Game Development",
            Icon : "fa-solid fa-gamepad",
        },
        {
            Title : "QA Tester",
            Icon : "fa-solid fa-vials",
        },
        {
            Title : "Support/Data Analyst",
            Icon : "fa-solid fa-chart-pie",
        },
        {
            Title : "Technician",
            Icon : "fa-solid fa-screwdriver-wrench",
        },
        {
            Title : "Helpdesk",
            Icon : "fa-solid fa-headset",
        }
    ],
    Hobbies : [
        {
            Title : "American Football",
            Desc : "I play Left Tackle for the London Blitz, where I’ve developed strength, discipline, and teamwork through competitive American Football. The role demands quick decision-making, communication, and consistent physical and mental growth.",
            Img : Base_URL + "Images/AmericanFootball.jpeg",
            Tools : [
                "Teamwork",
                "Communication",
                "Decision Making",
                "Coordination",
                "Quick Thinking",
                "Awareness",
            ] 
        },
        {
            Title : "Gaming",
            Desc : "I enjoy gaming in my free time, especially playing Valorant and Madden. Valorant helps sharpen my reaction time, communication, and strategic thinking, while Madden deepens my understanding of football tactics and playcalling, complementing my real-life experience on the field.",
            Img : Base_URL + "Images/GamingBG.jpg",
            Tools : [
                "Decision Making",
                "Communication",
                "Adaptability",
                "Problem Solving",
                "Teamwork",
                "Critical Thinking",
            ]
        },
        {
            Title : "Game Development",
            Desc : "In game development on Roblox, I leverage my creativity to design engaging experiences, using coding to bring interactive worlds and unique gameplay mechanics to life.",
            Img : Base_URL + "Images/GameDevBG.webp",
            Tools : [
                "Collaboration",
                "Problem Solving",
                "Creativity",
                "Adaptability",
                "Attention to detail",
                "Software Development",
            ]
        },
        {
            Title : "Cooking",
            Desc : "I enjoy cooking as a creative and relaxing hobby. It allows me to experiment with new recipes, develop practical skills, and unwind while making meals from scratch. I especially enjoy cooking for friends and family.",
            Img : Base_URL + "Images/CookingBG.jpg",
            Tools : [
                "Time-Management",
                "Attention to detail",
                "Creativity",
                "Organisation",
                "Problem Solving",
            ]
        },
        {
            Title : "PC Building",
            Desc : "I have always been passionate about building and repairing computers. I enjoy learning about the latest hardware and software technologies and keeping up with the latest trends in the industry.",
            Img : Base_URL + "Images/PCBuildingBG.webp",
            Tools : [
                "Hardware Knowledge",
                "Problem Solving",
                "Troubleshooting",
                "Attention to detail",
                "Technical Skills",
                "Operating Systems",
                "Networking"
            ]
        },
        {
            Title : "Basketball",
            Desc : "I enjoy basketball and occasionally play casually with friends. I'm a fan of the Golden State Warriors and love watching their fast-paced, team-oriented style of play, which keeps me inspired and connected to the sport.",
            Img : Base_URL + "Images/BasketballBG.webp",
            Tools : [
                "Teamwork",
                "Communication",
                "Coordination",
                "Endurance",
                "Problem Solving",
                "Critical Thinking",
            ]
        },
        {
            Title : "Boxing",
            Desc : "I’ve taken an interest in boxing as a way to stay fit and disciplined. It helps improve my coordination, endurance, and mental focus, while also providing a healthy outlet for stress and self-improvement.",
            Img : Base_URL + "Images/BoxingBG.jpg",
            Tools : [
                "Teamwork",
                "Communication",
                "Coordination",
                "Endurance",
                "Problem Solving",
                "Critical Thinking",
            ]
        }
    ],
    Certificates : [
        {
            Title : "GCSE",
            Desc : "I have completed my GCSEs with a strong academic record, demonstrating a solid foundation in core subjects such as Mathematics, English, and Science.",
            Img : Base_URL + "Images/Exams.jpg",
            Date : "2014 - 2019",
        },
        {
            Title : "A-Level",
            Desc : "I have completed my A-Levels studies, achieving strong grades in Computer Science, Engineering & Business studies.",
            Img : Base_URL + "Images/Exams.jpg",
            Date : "2019 - 2021",
        },
        {
            Title : "Internal Exclusions Prefect",
            Desc : "I have been elected as an Internal Exclusions Prefect, demonstrating my leadership and commitment to the school community.",
            Date : "2019 - 2021",
        },
        {
            Title : "OpenEDG : Python Essentials 2",
            Desc : "An advanced python course developing a stronger knowledge on OOP, Modules , libraries & problem solving.",
            Date : "2023",
        }
    ]
}

export default Data;