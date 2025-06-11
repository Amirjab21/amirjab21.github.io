import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Amirimage from '../assets/images/gray-amir.png'

function Main() {
  const jobTitles = ["Software Developer", "Machine Learning Engineer", "Social Scientist", "Entrepreneur"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion than typing

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, jobTitles]);

  return (
    <div className="w-full lg:mb-0 mb-16 lg:min-h-screen flex flex-row flex-start lg:items-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-start w-full h-fit pt-28 lg:pt-0 px-6 pb-6 bg-repeat-no-repeat bg-cover bg-fixed bg-center">
        <div className="flex flex-col items-center w-full lg:items-end lg:w-fit z-[2] mb-8 lg:mb-0">
          <div className="mb-4 lg:mb-5">
            <img 
              src={Amirimage} 
              alt="Avatar" 
              className="w-24 lg:w-48 h-24 lg:h-48 rounded-full object-cover"
            />
          </div>
          <div className="text-center lg:text-right flex justify-center lg:justify-end flex-col">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold m-0 mb-2 lg:mb-3 leading-tight">
              Amir <br/>Jabarivasal
            </h1>
            <p className="text-lg lg:text-xl m-0 mb-4 lg:mb-5">
              {currentText}
              <span className="animate-pulse font-bold ml-1">|</span>
            </p>
            <div className="flex flex-row gap-4 text-white lg:hidden justify-center">
              <a href="https://github.com/Amirjab21" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                <GitHubIcon className="text-3xl"/>
              </a>
              <a href="https://www.linkedin.com/in/amir-jabarivasal-a7368556/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                <LinkedInIcon className="text-3xl"/>
              </a>
            </div>
            <div className="hidden lg:flex flex-row gap-4 text-white self-end">
              <a href="https://github.com/Amirjab21" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                <GitHubIcon className="text-3xl"/>
              </a>
              <a href="https://www.linkedin.com/in/amir-jabarivasal-a7368556/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                <LinkedInIcon className="text-3xl"/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-full lg:max-w-2xl z-[2] mt-0 self-center">
          <div className="space-y-5">
            <p className="text-base lg:text-2xl leading-relaxed text-white/90">
              Entrepreneurial builder with expertise in software, ML, cryptography and building startups.
              <br/>
              <br/>
              I'm always trying to learn something new. My latest obsessions are linguistics, ML-enabled healthcare and AI in education.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;