import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6">
      <ScrollAnimationWrapper animationType="slideUp">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-300">
              I&apos;m passionate about building <span className="text-purple-400">meaningful digital experiences</span><br/> <span className="text-sm md:text-base">that combine clean code, thoughtful design, and practical problem solving</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/assets/illustration.png"
              alt="Skills"
              width={800}
              height={800}
              className="w-full max-w-md md:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

