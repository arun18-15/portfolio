"use client";

import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Java Developer", "Backend Developer", "Aspiring Software Engineer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-4 md:px-6"
    >
      <div className="container mx-auto max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Text content */}
          <div className="space-y-6">
            {/* Introduction text */}
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-3">
                Hello! I Am{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-bold inline-block">
                  DIMMAGUDI ARUN KUMAR
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg md:text-2xl text-gray-300">A Developer who</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-2">
                Builds Scalable &{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Reliable
                </span>
                <br /> Backend Systems
              </h1>
              <p className="text-sm md:text-base text-gray-300 mt-3 max-w-2xl mx-auto">
                Clean code, strong problem-solving, and practical engineering
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                I&apos;m a {displayedText}
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                An aspiring developer and computer science student, eager to build reliable software solutions with a focus on Java-based applications and backend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
