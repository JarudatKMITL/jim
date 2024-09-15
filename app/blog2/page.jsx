'useclient'

import Footer from "@/components/Footer";
import Link from "next/link";


const blog2 = () => {
    return (
        <div className="container mx-auto">
            <header className="mb-10 mt-5">
                <p className="text-center text-sm text-white/60 mb-3">Thursday, August 5, 2021</p>
                <h1 className="text-center text-4xl font-extrabold text-accent mb-4">
                    Car Maintenance and Memos Online Application
                </h1>
                <div className="mt-8 border-b border-gray-500 w-full mx-auto"></div>
            </header>
            <main className="max-w-5xl mx-auto px-6 py-10 lg:flex lg:space-x-16">
                <aside className="flex-none w-full lg:w-1/4 mb-10 lg:mb-0 ">
                    <div className="flex  items-center  lg:text-left lg:items-start mb-2">
                        <img
                            src="/assets/blog1/proflie.png"
                            alt="jimmy"
                            className="w-14 h-14 rounded-full mb-4"
                        />
                        <div>
                            <h3 className="text-sm font-bold text-white ml-4 mt-1">Jimmy Programer</h3>
                            <a href="https://www.facebook.com/profile.php?id=100009567887215" target="blank" className="text-pink-500 hover:underline text-sm ml-4">@Facebook</a>
                        </div>
                    </div>

                    <div className="mb-4 border-b border-gray-500 w-full mx-auto"></div>
                    <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">About Project</h4>
                        <div className="grid grid-cols-1 ">
                            <div>
                                <a href="/pdf/Thesis-Project.pdf" target="blank" className="text-pink-500 hover:underline text-sm ">Download thesis</a>
                            </div>
                            <div>
                                <a href="https://github.com/JarudatKMITL/jectcar4" target="blank" className="text-pink-500 hover:underline text-sm ">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {['javascript', 'react-native', 'node.js', 'firebase'].map((tag) => (
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

                <article className="flex-1">
                    <section className="prose prose-lg max-w-none">
                        <h2 className="text-accent text-xl mb-8">Introduction</h2>
                        <p className="text-white/60 my-8">The thesis present construction of Car Maintenance and Memos Online
                            Application which learn about development application on smartphone using react
                            native. This is application made for reduce low maintenance problem, It can damage
                            your car parts. And can reduce the overlap maintenance problem in car use
                            together. In application can divided in 2 categories is car maintenance mode and
                            memos mode. And important part of this application are use together with email
                        </p>
                        <h2 className="text-accent text-xl mb-8">Architecture Diagram</h2>
                        <div className="w-full max-w-lg mx-auto">
                            <img
                                src="/assets/blog1/1.jpg"
                                alt=""
                                className="w-full h-auto rounded-md brightness-90"
                            />
                        </div>
                        <p className="text-white mt-8 ml-5"> • The architecture of the application will consist of the following three components:</p>
                        <p className="text-white/60  ml-12">• User Interface (UI): This component handles the interaction between the user and the application, including the visual elements and user experience.</p>
                        <p className="text-white/60 ml-12">• User Interaction Layer: This layer manages how user inputs and interactions are processed and communicated within the application.</p>
                        <p className="text-white/60 ml-12">• Firebase Database Layer: This component is responsible for managing and storing data in Firebase, ensuring data persistence and retrieval.</p>
                        <h2 className="text-accent text-xl my-8">• Use Case Diagram</h2>
                        <div className="w-full max-w-lg mx-auto">
                            <img
                                src="/assets/blog1/2.jpg"
                                alt=""
                                className="w-full h-auto rounded-md brightness-90"
                            />
                        </div>
                        <p className="text-white mt-8 ">• The system for the vehicle maintenance and online reminder application must perform the following 7 use cases:</p>
                        <p className="text-white/60 ml-12">• Log In: Users must be able to securely access their accounts.</p>
                        <p className="text-white/60 ml-12">• Add Vehicle: Users can add new vehicles to their account.</p>
                        <p className="text-white/60 ml-12">• Record Maintenance History: Users can log details of vehicle maintenance and repairs.</p>
                        <p className="text-white/60 ml-12">• Track Mileage: Users can record the accumulated mileage of their vehicles.</p>
                        <p className="text-white/60 ml-12">• Record Expenses: Users can keep track of expenses related to vehicle maintenance.</p>
                        <p className="text-white/60 ml-12">• Set Reminders: Users can create reminders for upcoming maintenance tasks or other relevant events.</p>
                        <p className="text-white/60 ml-12 ">• Collaborate: Users can work together or share information within the system.</p>
                        <h2 className="text-accent text-xl my-8">Overview</h2>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>
                        <p className="text-white/60 my-8"></p>

                        <h2 className="text-accent text-xl mb-8"></h2>


                    </section>
                </article>
            </main>
        </div>
    );
}

export default blog2;