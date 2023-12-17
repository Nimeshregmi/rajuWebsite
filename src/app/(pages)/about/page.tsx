"use client";
import AnimatedText from "@/components/AnimatedText";
import Profilelayout from "@/components/Profilelayout";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../../../public/images/profile/developer-pic-2.jpg";
import {  useInView, useMotionValue, useSpring } from "framer-motion";
import {  useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

interface Props {
  value: number;
}

const AnimatedValue = ({ value }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref,{once:true});
  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <Head>
        <title>BipinCreates | About</title>
        <meta name="description" content="About Us" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Profilelayout classname="pt-16 ">
          <AnimatedText
            classname="!text-8xl  !mb-16 lg:!text-7xl md:text-5xl sm:!text-4xl md:!mb-10"
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-18 sm:gap-8 ">
            <div className=" col-span-3 flex flex-col items-start justify-start mr-2 xl:col-span-4 md:order-2 md:col-span-8">
              <h1 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">
                Biography
              </h1>
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className=" my-4 font-medium">
                {" "}
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid dark:border-light  border-dark dark:bg-dark bg-light p-8 md:order-1  md:col-span-8
            xl:col-span-4">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] dark:bg-light bg-dark rounded-[2rem] " />
              <Image
                src={profileImage}
                alt="RajuBasnet"
                className="w-full rounded-2xl h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text-4xl ">
                  <AnimatedValue value={50} />+
                </span>
                <h2 className="inline-block text-xl font-medium dark:text-light/75 text-dark/75 capitalize
                xl:text-center md:text-lg sm:text-base xs:text-sm
                 ">
                  Satisfied Client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text-4xl"><AnimatedValue value={40} />+</span>
                <h2 className="inline-block text-xl font-medium dark:text-light/75 text-dark/75 capitalize
                 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text-4xl"><AnimatedValue value={5} />+</span>
                <h2 className="inline-block text-xl font-medium dark:text-light/75 text-dark/75 capitalize 
                 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Year of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Profilelayout>
      </main>
    </>
  );
};

export default page;
