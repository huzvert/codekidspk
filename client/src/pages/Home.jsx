import React, { useState, useEffect } from 'react';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import hero_image from '../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg';
import offering_image from '../assets/kelly-sikkema-37Gug7AWjoo-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faCode,
  faGift,
  faLightbulb,
  faUserCog,
  faUserGroup,
  faUsers,
  faBullseye,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  return (
    <main>
      {/* ----------------- Hero Section -------------- */}
      <section className="relative">
        {/* Background Image and overlay*/}
        <div
          className="absolute inset-0 -mx-4 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${hero_image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 min-h-screen text-center text-white flex flex-col justify-items-center items-center">
          <div className="max-w-2xl sm:mt-32">
            <h1 className="text-3xl sm:text-6xl">
              Empowering the Next Generation of Coders
            </h1>
            <p className="text-white text-lg sm:text-2xl">
              Join <span className="text-c_accent">CodeKids</span> and embark on
              a journey of coding and creativity.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-10 sm:mb-16 py-6 md:p-7 outline-button"
          >
            Explore Our Programs
          </Button>

          {/* Mailing List Subscription */}
          <div className="absolute bottom-3 sm:right-0 text-white z-30">
            <MailList />
          </div>
        </div>
      </section>

      {/* ----------------- Mission & Vision -------------- */}
      <section className="bg-c_primary-light text-center py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">
            Our Mission & Vision
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-12 items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="bg-c_secondary-light p-6 rounded-full mb-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  size="3x"
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white max-w-md">
                At CodeKids, we aim to nurture young minds with the skills and
                knowledge needed to thrive in a digital world.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-c_secondary-light p-6 rounded-full mb-6">
                <FontAwesomeIcon
                  icon={faEye}
                  size="3x"
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white max-w-md">
                Our vision is to create a fun, engaging, and educational
                environment where kids can learn to code and develop critical
                thinking skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Core Values -------------- */}
      <section className="text-center">
        <h2 className="relative inline-block text-3xl sm:text-6xl">
          Our Core Values
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
        </h2>
        <p className="mt-6 mb-12 max-w-3xl mx-auto">
          There are unique opportunities for young people moving into the
          workplace today, but also unprecedented difficulties and demands. Code
          Kids was started by parents who have a good understanding of those
          necessary skills not currently taught in mainstream schools.
        </p>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 flex flex-col bg-c_primary-light/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-c_primary-light flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faUserCog} />
            </div>
            <h3 className="">Passion for Purpose</h3>
            <p>
              Our students have a goal based approach, where the pursue their
              passions with a purpose in mind. It’s not coding for the sake of
              coding!
            </p>
          </div>

          <div className="p-3 flex flex-col bg-[#AA0F6F]/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-[#AA0F6F] flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faUsers} />
            </div>
            <h3 className="">Collaboration with Peers</h3>
            <p>
              Real working environments are collaborative, and peer support is
              essential in any successful project. We encourage collaborative
              thinking!
            </p>
          </div>

          <div className="p-3 flex flex-col bg-c_secondary-light/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-c_secondary-light flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faCode} />
            </div>
            <h3 className="">Project Based Learning</h3>
            <p>
              We are constantly developing new courses and introducing cutting
              edge technologies, taught as discrete projects
            </p>
          </div>

          <div className="p-3 flex flex-col bg-[#7EBF38]/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-[#7EBF38] flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faLightbulb} />
            </div>
            <h3 className="">Play and Test</h3>
            <p>
              We allow time for students to enjoy their creations and test them
              out. Only with constant stress-testing can they come up with new
              ideas to improve their work!
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative">
        {/* Background Image and overlay */}
        <div
          className="absolute inset-0 -mx-4 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${offering_image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white">
          <h2 className="relative inline-block text-3xl sm:text-6xl">
            Our Offerings
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
          </h2>
          <p className="text-white mt-6 mb-12 max-w-3xl mx-auto">
            We Make Learning to Code Fun. Our courses are designed to teach
            crucial coding skills to the next generation of innovators.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faChalkboardTeacher} />
              </div>
              <h3 className="">Holiday Camps</h3>
              <p className="text-white flex-grow">
                Immersive, project-based learning through full day holiday
                camps!
              </p>
              <Button variant="outline" className="mt-8 outline-button">
                Book Camps
              </Button>
            </div>

            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faCode} />
              </div>
              <h3 className="">Term Time Classes</h3>
              <p className="text-white flex-grow">
                After school and weekend term time classes that help you learn
                to code!
              </p>
              <Button variant="outline" className="mt-8 outline-button">
                Book Term Time Classes
              </Button>
            </div>

            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faUserGroup} />
              </div>
              <h3 className="">1:1 Tutoring</h3>
              <p className="text-white flex-grow">
                We work with your child individually to help them achieve more
                through a targeted learning approach.
              </p>
              <Button variant="outline" className="mt-8 outline-button">
                Book 1:1 Tutoring
              </Button>
            </div>

            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faGift} />
              </div>
              <h3 className="">Parties</h3>
              <p className="text-white flex-grow">
                We help bring people together for fun parties with learning
                opportunities.
              </p>
              <Button variant="outline" className="mt-8 outline-button">
                Book Events & Parties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Testimonials -------------- */}
      <Testimonials />

      {/* ----------------- Call to Action -------------- */}
      <section className="bg-c_primary-light text-center text-white py-12">
        <h2 className="text-3xl sm:text-6xl">Ready to Get Started?</h2>
        <p className="mt-6 mb-12 max-w-3xl mx-auto">
          Join us and start your coding journey today!
        </p>
        <Button variant="outline" className="outline-button">
          Book a Class
        </Button>
      </section>

      {/* ----------------- Footer -------------- */}
      <Footer />
    </main>
  );
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('src/content/testimonials.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonials));
  }, []);

  return (
    <section className="text-center space-y-12">
      <h2 className="relative inline-block text-3xl sm:text-6xl">
        Our Parents and Students Say
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
      </h2>

      <Carousel
        className="max-w-72 sm:max-w-lg md:max-w-screen-md lg:max-w-screen-lg mx-auto"
        plugins={[Autoplay({ delay: 5000, stopOnHover: true, loop: true })]}
      >
        <CarouselContent>
          {testimonials.map(testimonial => (
            <CarouselItem key={testimonial.id}>
              <div className="space-y-12 p-12 flex flex-col rounded-lg border-2 border-c_primary-light">
                <p className="text-xl">{testimonial.testimonial}</p>
                <h3 className="text-c_secondary-light/70 uppercase">
                  {testimonial.name} | {testimonial.title}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
