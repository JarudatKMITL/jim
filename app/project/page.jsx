"use client";

import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Mobile Application",
    title: "project 1",
    description: "Car Maintenance and Memos Online Application  The application will be developed using React Native for cross-platform mobile development, ensuring compatibility with both iOS and Android devices. Firebase will serve as the backend database, providing real-time data storage, user authentication, and cloud functionality.",
    stack: [
      {
        name: "react-native",
        link: "https://www.youtube.com/watch?v=ni7WIotsXQQ"
      },
      {
        name: "firebase",
        link: "/pdf/Firebase.pdf"
      },
    ],
    image: '/assets/project/mobileApp.png',
    live: "/blog2",
    github: "https://github.com/JarudatKMITL/jectcar4"

  },
  {
    num: "02",
    category: "Internet of Things project",
    title: "project 2",
    description: "Blynk Server on Raspberry Pi",
    stack: [
      {
        name: "ModbusRelay",
        link: "https://github.com/JarudatKMITL/ModbusRelay",
      },
      {
        name: "MQTT",
        link: "https://github.com/JarudatKMITL/MQTT",
      },
      {
        name: "ModbusRTU",
        link: "https://github.com/JarudatKMITL/ModbusRTU",
      },
      {
        name: "TempRTC",
        link: "https://github.com/JarudatKMITL/Temp_RTC",
      },
    ],
    image: '/assets/project/IOT.png',
    live: "https://github.com/JarudatKMITL/blynk_Server#%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-blynk-server-%E0%B8%9A%E0%B8%99-raspberry-pi",
    github: "https://github.com/JarudatKMITL/blynk_Server"

  },
  {
    num: "03",
    category: "DNS Server",
    title: "project 3",
    description: "In this project, I experimented with creating a DNS Server using the Windows Server operating system.",
    stack: [
      {
        name: "Docmument DNS Server",
        link: "/pdf/DNS-Server.pdf",
      },
    ],
    image: '/assets/project/DNS.png',
    live: "https://www.youtube.com/watch?v=GU2uAVVZbsc",
    github:"https://github.com/JarudatKMITL/DNS-Server-Report"
  },
  {
    num: "04",
    category: "Automatic Sun Tracking System for Solar Panel",
    title: "project 4",
    description: "This project, at the Vocational Certificate level (Grade 3), involves developing a model of an automatic sun-tracking system for solar panels. The MSC51 microcontroller is used to control a servo motor, which rotates according to the preset angles based on time.",
    stack: [
      {
        name: "MCS51",
        link: "https://github.com/JarudatKMITL/Automatic-Sun-Tracking-System-for-Solar-Panel",
      },
    ],
    image: '/assets/project/Solar.png',
    live: "https://github.com/JarudatKMITL/Automatic-Sun-Tracking-System-for-Solar-Panel",
    github:"https://github.com/JarudatKMITL/Automatic-Sun-Tracking-System-for-Solar-Panel"
  },
];


const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
           xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <a
                      href={item.link}
                      target="blank"
                      className="text-xl text-accent hover:underline">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}

                    </a>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                      justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="blank" >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                      justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10">

                      </div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />

                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
              w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;