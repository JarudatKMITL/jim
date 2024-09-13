'use clicent'

import { ScrollArea } from '@/components/ui/scroll-area';

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: " With expertise and experience in electronics, electrical engineering, and IT, as well as in software development and innovative solutions that enhance operational efficiency, I offer a broad range of skills to deliver creative and effective strategies that enable the company to achieve its goals and advance confidently.",
    items: [
        {
            company: " SUPORNCHAI COMPANY LIMITED",
            position: "IT Support",
            duration: " | August 2024 - Present",
            de: "• System IT Management : Installing, maintaining, and managing hardware and software equipment such as computers, servers, network systems, and storage devices. ",
            de1:"• Technical Support : Assisting users in troubleshooting technical issues related to software, hardware, or network connectivity.",
            de2:"• Network Management : Overseeing the organization’s network connectivity, including configuring and managing routers, switches, and firewalls.",
            de3:"• System Maintenance : Regularly inspecting and maintaining computer equipment and network systems to ensure they remain operational.",
            de4:"• IT Equipment Management : Overseeing and managing the use of IT equipment within the organization, such as computers, IP phones, printers, etc.",
            de5:"",
        },
        {
            company: " Chonburi Technical College",
            position: "Student teachers",
            duration: " | May 2023 - May 2024",
            de:"• Teaching in the course of Microcontrollers.",
            de1:"• Teaching in the course of Introduction to Application Programming on Mobile Devices.",
            de2:"• Teaching in the course of Fundamentals of Electrical and Electronic",
        },
        {
            company: " Personal Project",
            position: "Mobile developer",
            duration: "| 2020-2021",
            de:"• Project serves as an opportunity for me to deepen my understanding of React-Native and Firebase.",
            de1:"• Tech : JavaScript, NodeJs, React,  React-native , Firebase ",
        },
        

    ]
};


const Experience = () => {
    return (
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
            </p>
            <div className="space-y-8 ">
                {experience.items.map((item) => (
                    <div className="flex items-start">
                        {/* ข้อมูลการศึกษา */}
                        <div className="ml-6">
                            <p className="font-bold text-accent">
                                {item.position}
                                <span className="font-bold text-accent text-sm">{item.duration}</span>
                            </p>
                            <p>
                                <span className="font-bold text-white/60 "></span>
                            </p>
                            <p>
                                Company : 
                                <span className="font-bold text-white/60">{item.company}</span>
                            </p>
                            <p>
                            Description   <br/>
                                <span className="font-bold text-white/60">{item.de}</span>
                            </p>
                            <p>
                                <span className="font-bold text-white/60">{item.de1}</span>
                            </p>
                            <p>
                                <span className="font-bold text-white/60">{item.de2}</span>
                            </p>
                            <p>
                                <span className="font-bold text-white/60">{item.de3}</span>
                            </p>
                            <p>
                                <span className="font-bold text-white/60">{item.de4}</span>
                            </p>


                            <hr className="mb-6 border-t border-gray-300 mt-6" />
                        </div>


                    </div>

                ))}
            </div>
        </div>
    );
}

export default Experience;