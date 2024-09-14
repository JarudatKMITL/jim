'use clicent'

import Footer from '@/components/Footer';
import Link from "next/link";

const blogs = {
    blog: "Latest",
    deBlog: "Welcome to my blog – a source of knowledge and inspiration, as well as a showcase of my various activities.",
    items: [
        {
            id: 1,
            date: "August 9, 2023",
            title: "Constructing a house independently",
            description: "Building a house by yourself may seem like a challenging task, but with good planning and thorough preparation, I can turn the home I want into a reality.",
            spa: "construction work in progress",
            link: "/blog1",
            imgs: "/assets/blog/ProfileHome.jpg"
        },
        {
            id: 2,
            date: "August 5, 2021",
            title: "Car Maintenance and Memos Online Application",
            description: "The thesis present construction of Car Maintenance and Memos OnlineApplication which learn about development application on smartphone using react native. This is application made for reduce low maintenance problem, It can damage your car parts. And can reduce the overlap maintenance problem in car use together. In application can divided in 2 categories is car maintenance mode and memos mode. And important part of this application are use together with email. ",
            spa: "javascript react-native node.js Firebase ",
            link: "/blog2",
        },
        {
            id: 2,
            date: "August 5, 2021",
            title: "One year as a teacher",
            description: "The thesis present construction of Car Maintenance and Memos OnlineApplication which learn about development application on smartphone using react native. This is application made for reduce low maintenance problem, It can damage your car parts. And can reduce the overlap maintenance problem in car use together. In application can divided in 2 categories is car maintenance mode and memos mode. And important part of this application are use together with email. ",
            spa: "javascript react-native node.js Firebase ",
            link: "/blog3",

        },

    ]

};

const Blogs = () => {
    return (
        <div className="container mx-auto h-full">
            {/* Body Content */}
            <main className="max-w-5xl mx-auto px-6 py-10">
                {/* Heading Section */}
                <header className="mb-10">
                    <h1 className="text-5xl font-extrabold text-white mb-2">{blogs.blog}</h1>
                    <p className="text-white">{blogs.deBlog}</p>
                </header>

                {/* Blog Post List */}
                {blogs.items.map((item, index) => (
                    <section className="space-y-16">
                        {/* Blog Post Item */}
                        <hr className="mb-6 border-t border-gray-300 mt-6" />
                        <article className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-10">
                            <div className="mb-8 lg:mb-0">
                                <div className="grid ">
                                <p className="text-sm text-white ">{item.date}</p>
                                <img
                                    src={item.imgs}
                                    alt="jimmy"
                                    className="object-scale-down size-44 rounded-md brightness-90"
                                />
                                </div>
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-accent mb-2">{item.title}</h2>
                                <div className="flex space-x-3 mb-4">
                                    <span className="text-pink-500 text-xs font-semibold uppercase">{item.spa}</span>

                                </div>
                                <p className="text-white/60 mb-4">{item.description}</p>

                                <Link
                                    href={item.link}
                                    key={index}
                                    className="text-pink-500 font-medium hover:underline">
                                    Read more →
                                </Link>
                            </div>
                        </article>


                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default Blogs;