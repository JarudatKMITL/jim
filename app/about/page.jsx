"use client"

import Footer from '@/components/Footer';
import Social from '@/components/Social';


const About = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Section Title */}
      <h1 className="text-5xl font-bold mb-6">About</h1>

      {/* Horizontal line */}
      <hr className="mb-6 border-t border-gray-300" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image and Info */}
        <div className="text-center">
          <img
            src="/assets/about/jim1.png"
            alt="Profile"
            className="w-60 h-60 rounded-full mx-auto mb-4"
          />
          
          <h2 className="text-xl font-bold">Jarudat Chaikuad</h2>
          <p className="text-gray-500">Programmer | IT Support <br />between jobs <br/> +66 830625832</p>

          {/* Icons */}
          <div className='mb-8 xl:mb-0 flex justify-center space-x-4 mt-4'>
            <Social
              containerStyles="flex gap-6 "
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent 
                hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="col-span-2">
          <p className=" text-white/60">
          I am an individual with a strong interest and skills in various fields, particularly in electrical and electronic work, which I have honed throughout my career. Additionally, I possess extensive knowledge in IT, ranging from software development to creating innovative solutions that support the success of my organization. I am passionate about modern technologies and always seek opportunities to apply my knowledge creatively to solve problems.
          </p>
          <p className="mt-4  text-white/60">
          As an instructor in subjects related to microcontrollers and electrical and electronic work, I have the privilege of sharing my knowledge with others and contributing to the development of students' skills. Seeing my students succeed in applying what they have learned brings me great pride and fulfillment.
          </p>
          <p className="mt-4  text-white/60">
          Moreover, I have a keen interest in web design. I have embarked on a project using Next.js to create a website that showcases my work and projects, utilizing Tailwind CSS for layout customization. This project has helped me further enhance my web development skills and present my work in a professional and aesthetically pleasing manner.
          </p>
          <p className="mt-4  text-white/60">
          Continuous learning and self-improvement are values I hold dear. I consistently seek new projects that allow me to apply my expertise, which enables me to grow both professionally and personally.
          </p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;