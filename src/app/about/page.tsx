import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
 ;

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi, I am Anubhav Singh from India
          </p>
          <div className="mt-8 text-sm md:text-base">
            {/* <p>Some of my competitive programming achievements are:</p> */}
          </div>
        </div>
        <div className="md:w-[40%]">
          <AboutAvatarSVG className="w-[100%]" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;
