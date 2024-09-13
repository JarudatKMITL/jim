'use clicent'

const education = {
    icon: "/",
    title: "My education",
    description: "My educational journey has been characterized by a deep commitment to learning and a focus on acquiring expertise in my field. I pursued my undergraduate studies in computer engineering at KMITL, where I developed a solid foundation in computer engineering. My academic experience provided me with the technical skills and theoretical knowledge necessary to excel in the industry.",
    items: [
      {
        level:"Bachelor's degree",
        name: "King Mongkut's Institute of Technology Ladkrabang",
        degree: " Industrial Education and Technology",
        gpa: " 2.76",
        duration: " 2022",
        major:" Computer Engineering",
        logo:"/assets/resume/kmitl.png",
      },
      {
        level:"Vocational Certificate",
        name: "Sri Songkhram Industrial Technology College Nakhon Phanom University",
        degree: " Electronics Technician",
        gpa: " 3.55",
        duration: " 2017",
        major:" Electronics",
        logo:"/assets/resume/Na.png",
      },
      
      
  
    ]
  };

const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <div className="space-y-8 mt-4">
                  {education.items.map((school) => (
                    <div  className="grid grid-cols-1 gap-4 items-start sm:grid-cols-2 md:grid-cols-3">
                      {/* วงกลมสีน้ำเงิน */}
                      <div className="col-span-1 ">
                        <img
                          src={school.logo}
                          alt={`ตราโรงเรียน ${school.name}`}
                          className="h-32 w-32 rounded-full object-cover mx-auto sm:mx-0"
                        />
                      </div>
                      {/* ข้อมูลการศึกษา */}
                      <div className="col-span-2 sm:col-span-1 md:col-span-2">
                      <p>
                          <span className="font-bold text-accent">{school.level}</span> 
                        </p>
                        <p>
                          <span className="font-bold text-white">{school.name}</span> 
                        </p>
                        <p className="font-bold text-white">
                        Faculty : 
                          <span className="font-bold text-white/60">{school.degree} </span> 
                        </p>
                        <p className="font-bold text-white">
                            Major : 
                          <span className="font-bold text-white/60">{school.major} </span> 
                        </p>
                        <p className="font-bold text-white">
                        GPA : 
                          <span className="font-bold text-white/60">{school.gpa} </span> 
                        </p>
                        <p className="font-bold text-white">
                        Graduation year :
                          <span className="font-bold text-white/60">{school.duration} </span> 
                        </p>
                        <hr className="mb-6 border-t border-gray-300 mt-6" />
                      </div>
                      
                      
                    </div>
                    
                  ))}
                </div>
                
              </div>
  );
}

export default Education;