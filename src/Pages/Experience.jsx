import { Outlet, Link } from 'react-router-dom'
import Left from "../Components/Left.jsx"
import Widget from "../Components/Widget.jsx"
import Data from "../Utils/Data.js"
import Button from '@mui/material/Button';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';




function AchievementsDiv(Props){
    return (
        <div class="mb-4">
            <h4 class="text-sm font-semibold mb-2">Key Achievements:</h4>
            <ul class="list-disc list-inside space-y-1">
                {Props.children}
            </ul>
        </div>
    )
};

function SkillsDiv(Props){
    return (
        <div className='flex flex-wrap gap-2 mt-4'>
            {Props.children}
        </div>
    )
};

function Experience(){
    return (
        <div className="relative scroll-smooth min-h-screen flex flex-col lg:flex-row text-white p-6">
            <Left/>
            <div id = "Right-Experience" className = "grow lg:basis-[75%] lg:mt-10">
                <h2 className='text-3xl font-bold mb-2 tracking-tight'>My Journey.</h2>
                <a>A look into how I started, what I’ve learned along the way, and the experiences that have shaped my path so far.</a>
                <article>
                    <Timeline
                        position="alternate"
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 1,
                            },
                        }}
                        >
                        {Object.entries(Data.Experiences).map(([key, value]) => (
                            <TimelineItem >
                                <TimelineOppositeContent>
                                    <h1 className='font-semibold'>{value.Position}</h1>
                                    <a className='inline-flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building h-4 w-4"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                                        <a className='font-semibold'>{value.Company}</a>
                                    </a>
                                    <br/>
                                    <a className='inline-flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <a className='font-semibold'>{value.Location}</a>
                                    </a>
                                    <br/>
                                    <a className='inline-flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                                        <a className='font-semibold'>{value.Date}</a>
                                    </a>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                <TimelineContent>
                                    <div className='text-left bg-black/10 p-2 rounded-xl bg-card text-card-foreground shadow overflow-hidden border-0 shadow-soft hover:shadow-soft-lg transition-shadow'>
                                        <div class="h-1 w-full bg-gradient-to-r from-accent-blue/10 to-accent-blue/5"/>
                                        {value.Desc}
                                        <br/><br/>
                                        <AchievementsDiv>
                                            {
                                                value.Achievements.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))
                                            }
                                        </AchievementsDiv>
                                        <SkillsDiv>
                                            {
                                                value.Skills.map((item, index) => (
                                                    <li key={index} className='inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs'>{item}</li>
                                                ))
                                            }
                                        </SkillsDiv>
                                    </div>
                                </TimelineContent>
                                
                            </TimelineItem>
                        ))}
                    </Timeline>
                </article>
            </div>
        </div>
    )
};


export default Experience