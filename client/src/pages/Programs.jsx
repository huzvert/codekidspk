import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SkeletonCard from '../components/SkeletonCard';
import { Link } from 'react-router-dom';

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('src/content/programs.json')
      .then(response => response.json())
      .then(data => setPrograms(data.programs));
  }, []);

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

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {programs.length === 0 ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          programs.map(program => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description}
              img={program.coverImage}
            />
          ))
        )}
      </section>
    </main>
  );
}

function ProgramCard({ id, title, description, img }) {
  return (
    <div className="h-full border flex flex-col">
      <img src={img} alt={title} className="w-full" />
      <div className="flex flex-col flex-grow p-3">
        <div className="flex-grow">
          <p className="text-3xl text-black mb-3">{title}</p>
          <p>{description}</p>
        </div>
        <div className="mt-auto">
          <Link to={`${id}`}>
            <Button variant="outline" className="mt-6 outline-button">
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
