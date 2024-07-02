import React from "react";
import hero_image from "../assets/thisisengineering-TeJZ3CGZXRw-unsplash.jpg";
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
            Code Kids is an educational platform that provides courses in basic
            programming related topics to kids. Our platform is designed to make
            learning to code a fun and interactive experience for children. We
            offer a wide range of courses that cater to different age groups and
            skill levels, ensuring that every child can learn at their own pace
            and level of understanding.
          </p>
        </div>
        <img
          src={hero_image}
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
        <div className="relative z-20">
          <h2 className="text-white">Empowering Kids Through Coding</h2>

          <div className="mt-12 flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20">
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">20+</p>
                <p className="text-white">Engaging Coding Modules</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">30+</p>
                <p className="text-white">Experienced Coding Instructors</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">500+</p>
                <p className="text-white">Happy Coding Graduates</p>
              </div>
              <div>
                <p className="text-c_accent text-2xl sm:text-5xl">100%</p>
                <p className="text-white">Statisfaction Rated By Parents</p>
              </div>
            </div>

            <div className="space-y-6">
              <Separator className="max-w-[15%] h-[0.3px] bg-gray-400" />
              <p className="text-white max-w-prose">
                At Code Kids, we believe that every child should have the
                opportunity to learn how to code. Our platform is designed to
                make learning to code fun and interactive for kids of all ages.
                We offer a wide range of courses that cater to different age
                groups and skill levels, ensuring that every child can learn at
                their own pace and level of understanding. Our courses cover a
                variety of topics, including programming languages, web
                development, game design, and more. Whether your child is a
                beginner or an experienced coder, we have a course that will
                help them develop their skills and reach their full potential.
              </p>
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
        <div className='mb-96'>
            <div className="relative w-full p-16  overflowx-hidden">
                <div className="flex absolute left-0 animate-marquee-infinite">
                    <div className='flex w-96 justify-around'>
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                    </div>
                    <div className='flex w-96 justify-around'>
                    <img src={hero_image} alt="" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                        <img src={stats_image} alt="q" />
                        <img src={hero_image} alt="q" />
                    </div>
                </div>
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
              src="src\assets\zammad.png"
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
            <h3 className="mt-4">Haya Fareed</h3>
            <p>Cirriculum Development Intern</p>
          </div>
        </div>
      </section>
    </main>
  );
}
