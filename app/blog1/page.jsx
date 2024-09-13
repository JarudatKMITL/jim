
'use client'


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
        <aside className="flex-none w-full lg:w-1/4 mb-10 lg:mb-0">
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
            
            
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>
            <p className="my-8 text-white/60  "></p>



          </section>
        </article>
      </main>
    </div>
  )
}

export default blog1;