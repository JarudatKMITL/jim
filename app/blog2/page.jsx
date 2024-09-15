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
                        <p className="text-white/60 my-8">The application will have two main functional categories: the vehicle maintenance record category and the memory log category. Both categories allow users to share data with others, enabling the logging of vehicle maintenance records and sharing maintenance history with other users.</p>
                        <div className="w-full max-w-lg mx-auto">
                            <img
                                src="/assets/blog1/2.png"
                                alt=""
                                className="w-full h-auto rounded-md brightness-90"
                            />
                        </div>
                        <p className="text-white/60 mt-8">• The vehicle maintenance record category allows users to:</p>
                        <p className="text-white/60 ml-12">• Add individual vehicles.</p>
                        <p className="text-white/60 ml-12">• Log and view repair history.</p>
                        <p className="text-white/60 ml-12">• View repair costs.</p>
                        <p className="text-white/60 ml-12">• Access fuel filling history and related expenses.</p>
                        <p className="text-white/60 ml-12">• Receive notifications about vehicle registration, taxes, and insurance.</p>
                        <p className="text-white/60 ml-12 mb-8">• Share maintenance history with others for collaborative use.</p>
                        <div className="w-full max-w-lg mx-auto">
                            <img
                                src="/assets/blog1/3.png"
                                alt=""
                                className="w-full h-auto rounded-md brightness-90"
                            />
                        </div>
                        <p className="text-white/60 mt-8">• The memory log category allows users to:</p>
                        <p className="text-white/60 ml-12">• Add new logs.</p>
                        <p className="text-white/60 ml-12">• Edit existing logs.</p>
                        <p className="text-white/60 ml-12">• Create new categories.</p>
                        <p className="text-white/60 ml-12">• Search within categories.</p>
                        <p className="text-white/60 ml-12 mb-8">• Share logs with others.</p>
                        <div className="w-full max-w-lg mx-auto">
                            <img
                                src="/assets/blog1/4.png"
                                alt=""
                                className="w-full h-auto rounded-md brightness-90"
                            />
                        </div>
                        <h2 className="text-accent text-xl my-8">Essential tools for application development.</h2>
                        <p>Download click</p>
                        <a href="https://nodejs.org/en/download/package-manager" target="blank" className="hover:underline ml-8 hover:text-accent text-white"> &bull; NodeJs</a>
                        <div className="ml-8">
                            <a className="text-white hover:text-accent hover:underline" href="https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=416&field_operating_system_target_id=436&field_architecture_target_id=391&field_java_package_target_id=396" target="blank">• Open JDK8 </a>
                            <span > or</span>
                            <a className="text-white ml-2 hover:text-accent hover:underline" href="https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=406&field_operating_system_target_id=436&field_architecture_target_id=391&field_java_package_target_id=396" target="blank" >Open JDK11 </a>
                        </div>
                        <a className="ml-8 hover:underline hover:text-accent" href="https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwi5q3BhCiARIsAJCfuZnO4tqBMeSyvOfFedyMGfXwVVO7R2G61ZctwQ9HTxKCAwlkDvMmRtYaAqwdEALw_wcB&gclsrc=aw.ds" target="blank">• Android Studio</a>
                        <div>
                            <a className="ml-8 hover:underline hover:text-accent" href="https://code.visualstudio.com/download" target="blank"> • Visual Stodio Code</a>
                        </div>
                        <h2 className="text-accent text-xl my-8">Application development</h2>
                        <p className="my-4">Create a project using the command.</p>
                        <div className="bg-gray-800 p-4 rounded-md">
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm font-mono text-red-400">
{`$ react-native init myApp `}
                                </code>
                            </pre>
                        </div>
                        <p className="my-4">Run the project using the command.</p>
                        <div className="bg-gray-800 p-4 rounded-md">
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm font-mono text-red-400">
{`$ react-native run android `}
                                </code>
                            </pre>
                        </div>
                        <h2 className="text-accent text-xl my-8">Authentication system control program</h2>
                        <p className="my-4">Create an authentication function using Facebook and Google through Firebase.</p>
                        <div className="bg-gray-800 p-4 rounded-md">
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm font-mono text-red-400">
{`import React, {useContext} from 'react';
import {
    View,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = () => {
 const {googleLogin, fbLogin} = useContext(AuthContext);
 return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image
         source={require('../assets/def.jpg')}
         style={styles.logo}
        />
        {Platform.OS === 'android' ? (
            <View>
                <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
                />
                <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
                />
            </View>
    ) : null}  

    </ScrollView>
  );
};
export default LoginScreen;  

`}
                                </code>
                            </pre>
                        </div>

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