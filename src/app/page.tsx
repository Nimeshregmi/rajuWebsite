import Profilelayout from "@/components/Profilelayout";
import Image from "next/image";
import Profilepic from "../../public/images/profile/heropic.jpeg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
// import Hireme from "@/components/Hireme";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="hero w-full justify-center items-center flex overflow-hidden">
        {/* <main className="flex items-center md:pt-40 text-dark md:herosm  hero  w-full min-h-screen dark:text-light"> */}
        {/* <Profilelayout classname="!pt-0 md:!pt-16 sm:!pt-8">
          <div></div>
          <div></div> */}
        {/* <div className="items-end md:mt-72 lg:flex-col z-20  w-full flex justify-end  "> */}
        {/* <div className="w-1/2 md:w-full"> */}
        {/* <Image src={Profilepic} priority alt="Raju" className="w-full h-auto lg:hidden md:inline-block md:w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              /> */}

        {/* </div> */}
        {/* <div className="w-1/2 my-auto  flex flex-col items-center bg- self-center lg:w-full lg:text-center  "> */}
        {/* <AnimatedText text="Turning Vision Into Reality With Editing And Design. " classname="!text-left xl:!text-5xl 
              lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl  
              "/> */}
        {/* <p className="text-left text-lg  text-dark  font-bold my-4 md:text-sm sm:text-xs">
                As a skilled Video Editor, I am dedicated to turning
                ideas into innovative Video. Explore my latest
                projects and articles, showcasing my expertise in Video Editing and UI/UX.
              </p> */}
        {/* <div className="flex items-center  self-start mt-4 lg:self-center">
                <Link
                  className="px-3 text-lg font-semibold rounded-2xl dark:bg-light bg-dark text-light dark:text-dark items-center p-2.5
                hover:bg-light hover:text-dark  border-2  flex hover:border-dark  dark:hover:border-light border-solid
                hover:dark:bg-dark hover:dark:text-light md:px-4 md:py-2 md:text-base
                "
                  href="mailto:basnetbeing@gmail.com"
                  target="_blank"
                >
                  Contact
                  <LinkArrow className={"w-5 ml-1"} />
                </Link>
              </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </Profilelayout> */}
        {/* <Hireme/> */}
        <div className=" inline-block w-24 md:hidden">
          <div className="flex items-center  self-start mt-4 lg:self-center">
            <Link
              className="px-3 text-lg font-semibold rounded-2xl dark:bg-light bg-dark text-light dark:text-dark items-center p-2.5
                hover:bg-light hover:text-dark  border-2  flex hover:border-dark  dark:hover:border-light border-solid
                hover:dark:bg-dark hover:dark:text-light md:px-4 md:py-2 md:text-base
                "
              href="mailto:basnetbeing@gmail.com"
              target="_blank"
            >
              Contact
              <LinkArrow className={"w-5 ml-1"} />
            </Link>
          </div>
        </div>
        {/* </main> */}
      </div>
      <About />
      <Projects />
    </>
  );
}
