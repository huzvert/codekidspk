import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Programs() {
  return (
    <main>
      <section className="text-center bg-black text-white">
        <h2 className="relative inline-block text-3xl sm:text-6xl">
          Our Offerings
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
        </h2>
        <p className="text-white mt-6 mb-12 max-w-3xl mx-auto">
          We Make Learning to Code Fun. Our courses are designed to teach
          crucial coding skills to the next generation of innovators.
        </p>
      </section>

      <section className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="p-3 flex flex-col rounded-md shadow-md h-full">
          <h3 className="">Holiday Camps</h3>
          <p className="text-white flex-grow">
            Immersive, project-based learning through full day holiday camps!
          </p>
          <Button variant="outline" className="mt-8 outline-button">
            Book Camps
          </Button>
        </div>

        <div className="bg-black/40 p-3 flex flex-col rounded-md shadow-md h-full">
          <div className="mb-4 self-center text-white w-24 h-24 rounded-full p-2 flex justify-center items-center">
            {/* <FontAwesomeIcon size="3x" icon={faCode} /> */}
          </div>
          <h3 className="">Term Time Classes</h3>
          <p className="text-white flex-grow">
            After school and weekend term time classes that help you learn to
            code!
          </p>
          <Button variant="outline" className="mt-8 outline-button">
            Book Term Time Classes
          </Button>
        </div>

        <ProgramCard
          title="Python1"
          description="lorem jipsim"
          img="https//:unsplash/123"
        />
      </section>
    </main>
  );
}

function GetPrograms() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('src/content/programs.json')
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);

  console.log(programs);

  return <div>Programs</div>;
}

function ProgramCard({ title, description, img }) {
  return (
    <div className="p-3 flex flex-col rounded-md shadow-md h-full">
      <img src={img} alt={title} />
      <h3 className="">{title}</h3>
      <p className="text-white flex-grow">{description}</p>
      <Button variant="outline" className="mt-8 outline-button">
        Book Camps
      </Button>
    </div>
  );
}
