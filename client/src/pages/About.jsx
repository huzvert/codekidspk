import React from "react";
import stats_image from "../assets/robo-wunderkind-hLvQ4-QEBAE-unsplash.jpg";
import { Separator } from "@/components/ui/separator";
export default function About() {
  return (
    <main>
      <section className="p-0 bg-black relative z-20 min-h-screen flex gap-12 flex-col lg:flex-row justify-items-center">
        <div className="px-[1rem] pt-20 space-y-12">
          <h1 className="text-white">About Us</h1>
          <Separator className="max-w-[15%] h-[0.1px] bg-gray-400" />
          <p className="text-white max-w-prose">
          Code Kids PK is an innovative educational platform dedicated to making programming fun and accessible for children. 
          Our engaging courses cover a variety of fundamental programming topics, 
          tailored specifically for different age groups and skill levels. 
          We prioritize interactive learning experiences, 
          ensuring that every child can progress at their own pace while enjoying the journey of learning to code. 
          Whether a beginner or an advanced learner, 
          every child can find the right course to match their abilities and interests. 
          Join us at Code Kids, where the future of coding starts with a smile!
          </p>
        </div>
        <img
          src="src\assets\fb.jpg"
          className="lg:max-w-screen-md object-cover"
          alt="About Us"
        />
      </section>

      {/* Stats */}
      <section className="relative">
        {/* Background Image and overlay*/}
        <div
          className="absolute inset-0 -mx-4 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${stats_image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center">
          <h2 className="text-white">Empowering Kids Through Coding</h2>

          <div className="mt-12 flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20">
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">20+</p>
                <p className="text-white">Engaging Coding Modules</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">10+</p>
                <p className="text-white">Experienced Coding Instructors</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">300+</p>
                <p className="text-white">Happy Coding Graduates</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">100%</p>
                <p className="text-white">Satisfaction Rated By Parents</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      {/* Our Affiliations */}
            <section className="text-center">
                <h2 className="relative inline-block text-3xl sm:text-6xl">
                  Our Affiliations
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
                </h2>
             </section>
            <section className="text-center">
                <div className="overflow-hidden">
                    <div className='flex -mx-4 animate-img-ticker space-x-8 w-[200%]'>
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\kickstart.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\leos.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\mashion.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\scarsdale.jpeg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\tns2.jpg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\LCF.png" alt="" />

                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\kickstart.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\leos.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\mashion.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\scarsdale.jpeg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\tns2.jpg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\LCF.png" alt="" />

                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\kickstart.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\leos.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\mashion.png" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\scarsdale.jpeg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\tns2.jpg" alt="" />
                        <img className="w-64 mx-4 self-start flex-none" src="src\assets\LCF.png" alt="" />
                     
                    </div>
                </div>


            </section>
      {/* Our Team */}
      <section className="text-center">
        <h2 className="relative inline-block text-3xl sm:text-6xl">
          Meet Our Team
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
        </h2>
        <p className="mt-6 mb-12 max-w-3xl mx-auto">
          We are a team of fun loving techies who love working with children and
          inspiring them through awesome, hands-on projects. We convert end
          users of tech into creators and designers, ready to be the creative
          problem-solvers of the future!
        </p>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\mehrab.png"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Mehrab Ahmad</h3>
            <p>CEO</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\zammad.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Zammad Khan</h3>
            <p>Managing Director</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\bilal.png"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Muhammad Bilal</h3>
            <p>Coding Instructor</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Danish.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Danish Athar</h3>
            <p>Coding Instructor</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Natiq.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Natiq Khan</h3>
            <p>Coding Instructor</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Samad.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Abdul Samad</h3>
            <p>Coding Instructor</p>
          </div>
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Yusra.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Yusra Zainab</h3>
            <p>Coding Instructor</p>
          </div>
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Yasjudan.jpeg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Yasjudan Akram</h3>
            <p>Coding Instructor</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Adil.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Muhammad Adil</h3>
            <p>Tech Lead</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Rauf.png"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Abdul Rauf</h3>
            <p>Technical Assistant</p>
          </div>
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Myra.jpeg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Myra Ali</h3>
            <p>HR Associate</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Hussain.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Hussain Ashar Mehtab</h3>
            <p>Social Media Manager</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Munzira.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Munzira Ali</h3>
            <p>Teaching Assistant</p>
          </div>

          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\male_ph.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Mohib Ahmad</h3>
            <p>Marketing And Affiliations Intern</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-12">
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Arfa.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Arfa Abdul Naseer</h3>
            <p>HR Intern</p>
          </div>
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Abdullah.jpg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Abdullah Farooq</h3>
            <p>Web Development Intern</p>
          </div>
          
          <div className="pb-4 border flex flex-col items-center">
            <img
              src="src\assets\Haya.jpeg"
              alt="Team Member"
              className="w-80"
            />
            <h3 className="mt-4">Haya Farid</h3>
            <p>Cirriculum Development Intern</p>
          </div>
        </div>
      </section>
    </main>
  );
}
