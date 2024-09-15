"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { FiDownload } from 'react-icons/fi';
import { motion } from "framer-motion";

import { TabsTrigger, TabsContent, TabsList, Tabs } from "@/components/ui/tabs";
import Education from '@/components/Education';
import Experience from './../../components/Experience';



const about = {
  titel: "About me",
  Description: "ontinuous learning and self-improvement are values I hold dear. I consistently seek new projects that allow me to apply my expertise, which enables me to grow both professionally and personally.",
  image: '/assets/project/thumb1.png',
  info: [
    {
      fieldName: "Name: ",
      fieldValue: "Jimmy Jarudat",
    },

    {
      fieldName: "Phone: ",
      fieldValue: "(+66) 8-3062-5832",
    },
    {
      fieldName: "Expreience: ",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Nationatity: ",
      fieldValue: "Thailand",
    },
    {
      fieldName: "Email:",
      fieldValue: "Jarudat.jc@gmail.com",
    },
    {
      fieldName: "Freelance: ",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages: ",
      fieldValue: "Thai, English",
    },
  ]

};





const skills = {
  title: "My skills",
  description: "Programming Languages | JavaScript (strong) C# , HTML , CSS Technologies | React , React-Native nodeJS , NextJS Vite , TailwindCss MongoDB , Firebase ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },

  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 XL:py-0"
    >
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div classname="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <Experience/>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <Education/>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitaliza">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.titel}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{about.Description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-6 max-w-[620px] mx-auto xl:mx-0 " >
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}

                </ul>
                <span ></span>
              </div>

              <a href="/pdf/Resume.pdf" download="Resume-Jimmy.pdf" >
                <Button
                  type="button"
                  variant='outline'
                  size='lg'
                  className="uppercase flex items-center gap-[30px]"
                >
                  <span classname="">Download Resume</span>
                  <FiDownload className='text-xl' />

                </Button>
              </a>


            </TabsContent>

          </div>

        </Tabs>

      </div>


    </motion.div>
  )
}

export default Resume;