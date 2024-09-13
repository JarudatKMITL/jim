import Image from 'next/image';
import Footer from '@/components/Footer';

const images = [
  {
    imgs: "/assets/certificate/RPA.jpg",
    name: "Robotic Process Automation",
    company: "Department of skill development",
    year: "2022"
  },

  {
    imgs: "/assets/certificate/Solid.jpg",
    name: "Solidworks Essentials",
    company: "Department of skill development",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/English.png",
    name: "IE.Tech totic 2021",
    company:"KMITL",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/EnglishNYC.png",
    name: "Intermediate",
    company:"NYC English",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/Drone.jpg",
    name: "Drone / Agriculture Drone",
    company:"Hacka Thailand",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/CTC.jpg",
    name: "Digital Literacy",
    company:"SCB Academy",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/IIOT.jpg",
    name: "Industrial Internet of Things",
    company:"Eastern Economic Corridor",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/IOT.png",
    name: "Basic Internet of Things",
    company:"Thaimooc",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/Em.png",
    name: "Embedded System",
    company:"Thaimooc",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/C.png",
    name: "Basic Computer Programming in C ",
    company:"Thaimooc",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/Elec.jpg",
    name: "Techniques of microprocessor System",
    company:"Department of skill development",
    year: "2021"
  },
  {
    imgs: "/assets/certificate/Amath.jpg",
    name: "Winner of the A-math Competition",
    company:"Secondary Educational Service ",
    year: "2021"
  },
  

];

const Certificate = () => {
  return (
    <div className='container '>
      <div >
        <h3 className="text-xl text-accent mb-4">My Training History</h3>
        <p className="mb-10">This training is to enhance new knowledge.</p>
      </div>
      <div className="grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 sm:place-items-center ">
        {images.map((item,index) => {
          return (
            
            <div >
              <Image
                key={index}
                src={item.imgs}
                width={400}
                height={400}
                alt="Picture of the author"
                className="filter brightness-90 rounded-lg "
              />
              <h3 className='flex justify-center mt-4 text-accent'>{item.name}</h3>
              <p className="flex justify-center">{item.company}</p>
              <p className="flex justify-center">
                <span className="text-2xl text-accent">•</span>  {item.year}
              </p>
            </div>
          );
        })}
      </div>
      <Footer/>
      

    </div>
    

  )
}

export default Certificate