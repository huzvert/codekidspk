import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MailList from "../components/MailList";
import TutoringPopup from "@/components/TutoringPopup";
import ServicesPopup from "@/components/ServicesPopup";
import TrialClassPopup from "@/components/TrialClassPopup";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import hero_image from "../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import offering_image from "../assets/kelly-sikkema-37Gug7AWjoo-unsplash.jpg";
import mission_image from "../assets/kidonIPAD.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChalkboardTeacher,
  faGift,
  faHandshake,
  faList,
  faRoad,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

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
        <div className="relative z-20 min-h-screen xl:min-h-max text-center text-white flex flex-col xl:gap-y-96 justify-center sm:justify-normal items-center 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="max-w-2xl sm:mt-32">
            <h1 className="text-3xl sm:text-6xl">
              Empowering the Next Generation of Coders
            </h1>
            <p className="text-white text-lg sm:text-2xl">
              Join <span className="text-c_accent">Code Kids PK</span> and
              embark on a journey of coding and creativity.
            </p>
            <Link to="/programs">
              <Button
                variant="outline"
                className="mt-10 mb-36 sm:mb-16 py-6 md:p-7 outline-button"
              >
                Explore Our Programs
              </Button>
            </Link>
          </div>

          {/* Mailing List Subscription */}
          <div className="absolute xl:relative xl:self-end bottom-3 sm:right-0 text-white z-30">
            <MailList />
          </div>
        </div>
      </section>

      {/* ----------------- Mission & Vision -------------- editing */}
      <section className="relative p-0 grid lg:grid-cols-1 shadow-md">
        <div className="relative py-16 md:py-32 px-6 md:px-12 self-stretch bg-[#000000] -mx-4 bg-center z-0">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
            style={{ backgroundImage: `url(${mission_image})` }}
          ></div>
          <div className="relative flex flex-col gap-16 w-full mx-auto h-full justify-center items-center z-10">
            <h2 className="relative text-white inline-block text-3xl sm:text-6xl">
              Mission
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
            </h2>
            <div className="flex gap-8">
              <p className="text-white text-center max-w-prose lg:max-w-screen-lg">
                At Code Kids PK, we are dedicated to transforming the learners
                of today into the disrupters of tomorrow. Our mission is to
                spark a lifelong passion for innovation and curiosity in each
                student. We create an environment where exploration,
                experimentation, and collaboration are not just encouraged but
                celebrated, fostering a sense of inclusion and support. Our
                educational approach goes beyond the traditional, emphasizing
                hands-on learning that cultivates critical thinking,
                problem-solving skills, and a deep reverence for STEM
                disciplines. We are committed to inspiring young minds to
                embrace technology, encouraging them to see themselves as future
                innovators, changemakers, and leaders. By empowering the leaders
                of tomorrow, we are laying the groundwork for a brighter, more
                innovative future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Core Values -------------- */}
      <section className="text-center 2xl:max-w-[1440px] 2xl:mx-auto">
        <h2 className="relative inline-block text-3xl sm:text-6xl">
          Our Unique Offerings
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
        </h2>
        <p className="mt-6 mb-12 max-w-3xl mx-auto">
          There are unique opportunities for young people moving into the
          workplace today, but also unprecedented difficulties and demands. Code
          Kids was started by parents who have a good understanding of those
          necessary skills not currently taught in mainstream schools.
        </p>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="p-3 flex flex-col bg-c_primary-light/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-c_primary-light flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faRoad} />
            </div>
            <h3 className="">Progressive Learning Path</h3>
            <p>
              Start your child’s journey with fundamental basics in coding,
              laying a strong groundwork and later delve into advanced concepts
              and cutting-edge skills that prepare for the future of technology
              and innovation.
            </p>
          </div>

          <div className="p-3 flex flex-col bg-[#AA0F6F]/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-[#AA0F6F] flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faHandshake} />
            </div>
            <h3 className="">Bridging Generational Disconnect</h3>
            <p>
              Our instructors, who are Gen Z university students themselves,
              bring a fresh perspective to teaching. They bring fresh
              perspectives, current industry insights, and relatable teaching
              styles that resonate with young learners.
            </p>
          </div>

          <div className="p-3 flex flex-col bg-c_secondary-light/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-c_secondary-light flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faBookOpen} />
            </div>
            <h3 className="">Innovative Curriculum</h3>
            <p>
              Our curriculum begins with essential foundational skills, ensuring
              a thorough understanding. As students move forward, they'll
              explore advanced concepts and future-ready skills, equipping them
              to thrive in the rapidly evolving tech landscape.
            </p>
          </div>

          <div className="p-3 flex flex-col bg-[#7EBF38]/10 rounded-md shadow-md">
            <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 bg-[#7EBF38] flex justify-center items-center">
              <FontAwesomeIcon size="3x" icon={faList} />
            </div>
            <h3 className="">Flexible Learning Options</h3>
            <p>
              Choose from diverse formats including full-time, part-time, and
              online courses, allowing your child to study at their own pace and
              balance learning with other commitments.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- Offerings -------------- */}
      <Offerings />

      {/* ----------------- Testimonials -------------- */}
      <Testimonials />

      {/* ----------------- FAQs -------------- */}
      <FAQs />

      {/* ----------------- Call to Action -------------- */}
      <TrialClass />
    </main>
  );
}

function Offerings() {
  const [isTutoringPopupVisible, setTutoringPopupVisible] = useState(false);
  const [isServicesPopupVisible, setServicesPopupVisible] = useState(false);

  const handleTutoringClick = () => {
    setTutoringPopupVisible(true);
  };
  const handleServicesClick = () => {
    setServicesPopupVisible(true);
  };

  const handleCloseTutoringPopup = () => {
    setTutoringPopupVisible(false);
  };
  const handleCloseServicesPopup = () => {
    setServicesPopupVisible(false);
  };

  return (
    <>
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
        <div className="relative z-20 text-center text-white mx-auto max-w-screen-lg">
          <h2 className="relative inline-block text-3xl sm:text-6xl">
            Our Offerings
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
          </h2>
          <p className="text-white mt-6 mb-12 max-w-3xl mx-auto">
            Step into a vibrant learning environment where we make coding
            accessible and enjoyable, equipping young learners with skills
            crucial for future innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faChalkboardTeacher} />
              </div>
              <h3>Camps and Classes</h3>
              <p className="text-white flex-grow">
                Engage in immersive, project-based learning through holiday
                camps and after-school/weekend classes during the school year!
              </p>
              <Link to="/programs">
                <Button
                  variant="outline"
                  className="mt-8 min-w-full outline-button"
                >
                  View Programs
                </Button>
              </Link>
            </div>

            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faUserGroup} />
              </div>
              <h3>1:1 Tutoring</h3>
              <p className="text-white flex-grow">
                Experience our personalized tutoring sessions designed to cater
                to your child's unique needs, helping them excel through
                focused, individualized learning.
              </p>
              <Button
                onClick={handleTutoringClick}
                variant="outline"
                className="mt-8 min-w-full outline-button"
              >
                Book 1:1 Tutoring
              </Button>
            </div>

            <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
              <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon size="3x" icon={faGift} />
              </div>
              <h3 className="">Services</h3>
              <p className="text-white flex-grow">
                We provide a variety of services, from birthday parties and
                school workshops to corporate events and tech-focused offerings.
              </p>

              <Button
                onClick={handleServicesClick}
                variant="outline"
                className="mt-8 min-w-full outline-button"
              >
                Book Other Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TutoringPopup
        isVisible={isTutoringPopupVisible}
        onClose={handleCloseTutoringPopup}
      />
      <ServicesPopup
        isVisible={isServicesPopupVisible}
        onClose={handleCloseServicesPopup}
      />
    </>
  );
}

function TrialClass() {
  const [isTrialClassPopupVisible, setTrialClassPopupVisible] = useState(false);

  function handleTrialClassClick() {
    setTrialClassPopupVisible(true);
  }

  function handleCloseTrialClassPopup() {
    setTrialClassPopupVisible(false);
  }

  return (
    <>
      <section className="bg-c_primary-light text-center text-white py-12">
        <h2 className="text-3xl sm:text-6xl">Ready to Get Started?</h2>
        <p className="mt-6 mb-12 max-w-3xl mx-auto">
          Join us and start your coding journey today!
        </p>

        <Button
          onClick={handleTrialClassClick}
          variant="outline"
          className="outline-button"
        >
          Book a Trial Class
        </Button>
      </section>

      <TrialClassPopup
        isVisible={isTrialClassPopupVisible}
        onClose={handleCloseTrialClassPopup}
      />
    </>
  );
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("src/content/testimonials.json")
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonials));
  }, []);

  return (
    <section className="text-center space-y-12 mx-auto max-w-screen-lg">
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
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/3 flex items-stretch"
            >
              <Card className="flex-1">
                <CardContent className="space-y-12 p-12 flex flex-col rounded-lg border-2 border-c_primary-light h-full">
                  <p className="text-xl flex-1">
                    <span className="text-c_primary-light text-3xl font-black pr-1">
                      &ldquo;
                    </span>
                    {testimonial.testimonial}
                    <span className="text-c_primary-light text-3xl font-black pl-1">
                      &rdquo;
                    </span>
                  </p>
                  <h3 className="text-c_secondary-light/70 uppercase">
                    {testimonial.name} | {testimonial.title}
                  </h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:m-4 bg-c_primary-light" />
        <CarouselNext className="md:m-4 bg-c_primary-light" />
      </Carousel>
    </section>
  );
}

function FAQs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("src/content/faqs.json")
      .then(response => response.json())
      .then(data => setFaqs(data.faqs));
  }, []);

  return (
    <section className="text-center space-y-12 mx-auto max-w-screen-lg">
      <h2 className="relative inline-block text-3xl sm:text-6xl">
        Frequently Asked Questions
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
      </h2>

      <Accordion type="single" collapsible className="container">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`$item-${index}`}
            className="shadow-md rounded-lg px-4 mb-4 sm:mb-6"
          >
            <AccordionTrigger className="gap-4 flex items-center hover:no-underline">
              <span className="text-start font-bold hover:text-c_primary-light flex-1">
                {faq.question}
              </span>
              <ChevronDown
                className="AccordionChevron bg-c_primary-light rounded-full flex items-center justify-center w-6 h-6 sm:w-[30px] sm:h-[30px]"
                aria-hidden
              />
            </AccordionTrigger>
            <AccordionContent className="text-start text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
