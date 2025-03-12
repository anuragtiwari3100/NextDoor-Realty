import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Show 3 cards on large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 cards on tablets
      } else {
        setCardsToShow(1); // Show 1 card on mobile
      }
    };
    
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 3000); // Change project every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Our Projects <span className='underline underline-offset-4 decoration-1 font-light'> Showcasing Excellence</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Explore Our Latest Construction Projects
      </p>

      {/* Slider Buttons */}
      <div className='flex justify-center items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded-full mx-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded-full mx-2' aria-label='Next Project'>
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className='relative overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/3'>
              <img src={project.image} alt={project.title} className='w-full h-auto rounded-lg shadow-lg' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg'>
                  <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators (Dots) */}
      <div className='flex justify-center mt-6'>
        {projectsData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
