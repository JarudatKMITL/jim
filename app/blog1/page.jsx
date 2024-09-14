
'use client'


import Footer from "@/components/Footer";
import Link from "next/link";

const blog1 = () => {
  return (
    <div className="container mx-auto">
      <header className="mb-10 mt-5">
        <p className="text-center text-sm text-white/60 mb-3">Wednesday, August 9, 2023</p>
        <h1 className="text-center text-4xl font-extrabold text-accent mb-4">
          Constructing a house independently
        </h1>
        <div className="mt-8 border-b border-gray-500 w-full mx-auto"></div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10 lg:flex lg:space-x-16">
        <aside className="flex-none w-full lg:w-1/4 mb-10 lg:mb-0 ">
          <div className="flex  items-center  lg:text-left lg:items-start mb-2">
            <img
              src="/assets/blog/profileB1.png"
              alt="jimmy"
              className="w-14 h-14 rounded-full mb-4"
            />
            <div>
              <h3 className="text-sm font-bold text-white ml-4 mt-1">Jarudat Chaikuad</h3>
              <a href="https://www.facebook.com/profile.php?id=100009567887215" target="blank" className="text-pink-500 hover:underline text-sm ml-4">@Facebook</a>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-500 w-full mx-auto"></div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['construction work in progress'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-pink-500 font-semibold uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4 border-b border-gray-500 w-full mx-auto"></div>


          <div className="mb-8">
            <Link
              href="/myblog"
              key=""
              className="text-pink-500 font-medium hover:underline">
              ← Back to the blog
            </Link>
          </div>


        </aside>

        {/* Article Content */}
        <article className="flex-1">


          <section className="prose prose-lg max-w-none">
            <h2 className="text-xl mb-7 text-accent">Introduction</h2>
            <p className="text-white/60">
              Welcome to my blog. In this article, I will share the story of building my first house by myself. It started as a childhood dream of wanting to try and do it on my own. Now, I’ve finally made it a reality. Though it's a small house, I’m proud to have built it with my own hands.
            </p>
            <h1 className="text-accent text-xl my-10"> Overview of the construction</h1>
            <p className="text-white/60 mb-8">The long construction process began in early 2022 and continues into 2023, with the project still unfinished.</p>
            <div className="w-full max-w-lg mx-auto">
              <img
                src="/assets/blog/ProfileHome.jpg"
                alt=""
                className="w-full h-auto rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• A design based on my personal preferences</h2>
            <p className="my-8 text-white/60  ">In this phase, I used SketchUp to design the house, tailoring it to my personal preferences. I found inspiration from online sources and adapted them to suit my needs. Importantly, due to budget constraints, I didn't design the house to be large or extravagant.</p>
            <div className="w-full max-w-lg mx-auto">
              <img
                src="/assets/blog/proflieHome.jpg"
                alt=""
                className="w-full h-auto rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• Beginning the structural work</h2>
            <p className="my-8 text-white/60  ">First, I surveyed the site and filled the land to level and raise the ground for aesthetic purposes.</p>
            <div className="w-full max-w-lg mx-auto">
              <img
                src="/assets/blog/2.jpg"
                alt=""
                className="w-full h-auto rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Once the land was filled to a level I was satisfied with, the next step was to set up the main pillar.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v1.mp4" type="video/mp4" />  {/* เปลี่ยนเป็น path ของวิดีโอที่ต้องการ */}
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Before setting up the house pillars, I followed the tradition of the Isan people by first erecting the main pillar.</p>
            <div className="w-full max-w-lg mx-auto">
              <img
                src="/assets/blog/3.jpg"
                alt=""
                className="w-full h-auto rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">After the main pillar was set, the next step was to weld the steel reinforcements around the pillar. My grandfather and friends helped with this part of the process. Once we reached this stage, the shape of the house started to become visible, which gave me encouragement to continue.</p>
            <h2 className="my-8 text-xl text-accent">• Roof frame welding work</h2>
            <p className="my-8 text-white/60  ">I believe that perseverance will lead us to success. For the roof frame welding work, my grandfather was unable to help due to his old age and inability to climb high. I took on the task of welding alone, with my grandfather guiding me and providing directions.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v2.mp4" type="video/mp4" />  {/* เปลี่ยนเป็น path ของวิดีโอที่ต้องการ */}
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Perseverance will lead us to our goal.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v3.mp4" type="video/mp4" />  {/* เปลี่ยนเป็น path ของวิดีโอที่ต้องการ */}
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Gradually welding bit by bit</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v4.mp4" type="video/mp4" />  {/* เปลี่ยนเป็น path ของวิดีโอที่ต้องการ */}
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Since I was welding alone, I focused on assembling the welds by cutting the pieces into smaller parts and then assembling them onto the structure. </p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/4.jpg"
                alt=""
                className="w-full h-auto rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Finally, the day came when we finished welding. This stage also took quite a bit of time. The experience left me covered in soot.</p>
            <h2 className="my-8 text-xl text-accent">• Beginning the roof installation and pouring the floor.</h2>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/5.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">And so, the roof installation was completed. It's a pity I didn't record any videos of the process. I’m grateful to my friends for their help; I couldn't have done it without them.</p>
            <h2 className="my-8 text-xl text-accent">• Starting to prepare the equipment for brickwork.</h2>
            <p className="my-8 text-white/60 ">Preparing cement, bricks, windows, and other materials and equipment needed for brickwork.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v5.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="my-8 text-xl text-accent">• Starting the brickwork and installing the windows. </h2>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v6.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Started testing the window installation, working with my grandfather. It was tiring, but we persevered.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/6.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">The shape is starting to take form.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v7.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">Beginning to install the small windows.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/7.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div> 
            <p className="my-8 text-white/60  ">The brickwork is nearly complete on all sides, and all the windows are installed. The house is starting to take shape.</p>
            <h2 className="my-8 text-xl text-accent">• Planning an extension to the back</h2>
            <p className="my-8 text-white/60  ">The term 'house' really means the budget has gone over. Since we’ve come this far, extending a bit more will give us additional space.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/8jpg.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div> 
            <p className="my-8 text-white/60  ">With the structure complete, the next step was to install the roof. My grandfather helped by handing over the roofing sheets.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v8.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="my-8 text-xl text-accent">• Electrical wiring and conduit installation</h2>
            <p className="my-8 text-white/60  ">Started designing and planning the electrical conduit layout, using an in-wall wiring system. I began chiseling the walls to embed the conduit. It seemed easy at first, but it turned out to be quite exhausting.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v9.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">After chiseling the walls, I proceeded to lay the conduits and run the electrical wiring.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/9.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div> 
            <p className="my-8 text-white/60  ">Finally, the conduit wiring is almost complete. Next, I’ll prepare to plaster the walls for a smooth finish and install the ceiling to cover everything up.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/10.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• After completing the electrical wiring, the next task is plastering the walls.</h2>
            <p className="my-8 text-white/60  ">My first time plastering a wall—honestly, it was more exhausting than the previous tasks. Since it was my first attempt, it might not be perfect, but it's good enough.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/v10.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="my-8 text-white/60  ">I kept working until all the walls were plastered. This plastering job took a long time—I could only manage one wall per day. With a total of 36 walls, it took me 36 days to complete the plastering.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/11.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• Starting the ceiling installation.</h2>
            <p className="my-8 text-white/60  ">I started by watching YouTube and learning through trial and error. I’m thankful to all the teachers on YouTube. I took advice from various channels and adapted it to fit my preferences. Let’s dive into the process!</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/12.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">In the main hall, I attempted to create a recessed ceiling. It was my first time working with ceilings, and it was quite a challenge.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/13.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Once the frame was completed, I began lifting the gypsum boards to install them. The shape of the ceiling started to come together little by little.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/14.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">After that, I painted the ceiling and began installing the lights, choosing the type of lighting that I liked.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/15.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">I also started installing lights in the recessed ceiling of the main hall.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/16.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">At night, I began testing my RGB lighting system. Every light is an RGB bulb that can be controlled via Wi-Fi and through my mobile phone. The lights can also be turned on and off using voice commands. I've been working to make this a smart home by using Wi-Fi-enabled bulbs and switches that can be controlled remotely.</p>
            <div className="w-full max-w-lg mx-auto mt-8">
              <video
                controls
                className="w-full aspect-video"
              >
                <source src="/assets/blog/11.mp4" type="video/mp4" />  
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="my-8 text-xl text-accent">• Next, I began working on the flooring.</h2>
            <p className="my-8 text-white/60  ">"I started with the bedroom first.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/17.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Once that was done, I began installing the baseboards. Laying the tiles seemed easy, but it was slow going since it was my first time doing it.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/18.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">After that, I continued working on the flooring in the main hall. </p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/19.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Being a bit impatient, even though the house wasn't finished yet, I went ahead and ordered furniture for the room.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/20.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">"Once the bedroom was finished, I quickly installed the door knob. I chose a smart lock that requires fingerprint, passcode, or keycard to unlock, while still allowing the use of a regular key.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/22.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">I hired a glass technician to install the front door because I wasn’t able to do it myself.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/21.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• Next, I began working on the flooring.</h2>
            <p className="my-8 text-white/60  ">I started experimenting with plaster baseboard molding on my own, shaping it according to the dimensions I needed.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/23.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Next, I began installing the trim around the windows and enlarged the front pillars to enhance their appearance.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/24.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-xl text-accent">• Bathroom work</h2>
            <p className="my-8 text-white/60  ">After finishing the plumbing installation, I started laying the tiles. This was my first time doing this, so I’m grateful for the advice I found on YouTube.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/25.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Once the tiling was almost complete, I began working on the ceiling installation next.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/26.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Started installing the exhaust fan.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/28.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Next, I installed the toilet. Then, I installed the sink and mirror.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/29.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Installed the showerhead—just one final step away from being ready for use.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/30.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">Final step: Installed the water pump and connected the pipes to the bathroom. Now, everything is ready for use.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/31.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <h2 className="my-8 text-2xl text-accent">• It was then that disappointment arrived.</h2>
            <p className="my-8 text-white/60  ">At one point in my life, I received a red card and had to serve in the military. The disappointment and sadness were overwhelming, as it felt like my life goals were shattered just because of having to serve.</p>
            <div className="w-full max-w-lg mx-auto">
               <img
                src="/assets/blog/100.jpg"
                alt=""
                className="w-full h-full rounded-md brightness-90"
              />
            </div>
            <p className="my-8 text-white/60  ">I was in the process of building my career, but everything seemed to fall apart. As a freelance programmer, I hadn’t moved on from my work, and the construction of my house was almost complete—just a little more to go. But then, I had to go serve in the military first. It’s really hard to come to terms with.</p>
            <p className="my-10 text-white ">Finally, I would like to express my heartfelt gratitude to everyone who took the time to read this article until the end. Thank you.</p>
          
          </section>
         
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default blog1;