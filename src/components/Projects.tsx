"use client";
import AnimatedText from "@/components/AnimatedText";
import Profilelayout from "@/components/Profilelayout";
import Head from "next/head";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
// import project4 from '../../public'
import project1 from "../../public/images/projects/img1.png";
import project4 from "../../public/images/projects/img4.png";
import project2 from "../../public/images/projects/img2.png";
import project3 from "../../public/images/projects/img3.png";
import project5 from "../../public/images/projects/img5.png";
import { motion } from "framer-motion";

interface Props {
  type: string;
  title: string;
  summary: string;
  link: string;
  githublink: string;
  img: StaticImageData;
}
const ProjectImage = motion(Image);

const FeatureProject = ({
  type,
  title,
  summary,
  img,
  link,
  githublink,
}: Props) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl  dark:border-light dark:bg-dark   lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  xs:p-4     ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  bg-dark rounded-[2.5rem]  rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%]
      xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <ProjectImage
          className="w-full h-auto"
          src={img}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
          alt={title}
        />
      </Link>
      <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline hover:underline-offset-2"
          href={link}
          target="_blank"
        >
          {" "}
          <h2 className="my-2 w-full dark:text-light text-left font-bold text-4xl sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="font-medium my-2 text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link
            className="hover:underline hover:underline-offset-2 font-semibold ml-3 bg-dark text-light rounded-lg  py-3 text-lg px-6 dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, githublink }: Props) => {
  return (
    <article className="flex relative p-6 items-center justify-center border border-solid border-dark rounded-2xl bg-light flex-col dark:border-dark dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem]  rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <ProjectImage
          className="w-full h-auto"
          src={img}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
          alt={title}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          className="hover:underline hover:underline-offset-2"
          href={link}
          target="_blank"
        >
          {" "}
          <h2 className="my-2 w-full text-left font-bold text-3xl dark:text-light">
            {title}
          </h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between ">
          <Link
            className="hover:underline underline hover:text-xl duration-100 font-semibold mr-3 dark:text-light  text-lg "
            href={link}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Raju Basnet | Projects Page</title>
        <meta name="description" content="Projects Page" />
      </Head>
      <main id="projects" className="w-full mb-16 flex flex-col items-center justify-center">
        <Profilelayout classname="pt-16">
          <AnimatedText
            classname="!text-8xl dark:text-light !mb-16 md:!text-6xl sm:!text-4xl "
            text="Imagination Trumps Knowledge!"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project5}
                type={"Feature Project"}
                title={"Why is PARAS SHAH the MOST HATED PRINCE of NEPAL?"}
                summary={"A youtube video on life story of PRINCE of NEPAL."}
                link={"https://www.youtube.com/watch?v=NZ8UDrxV2EA&t=5s"}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project1}
                type={"Feature Project"}
                title={"How SACAR Adhikari aka Lil. BUDDHA went CRAZY?"}
                summary={"A youtube video on life story of Sacar Adhikari."}
                link={"https://www.youtube.com/watch?v=qZyklrDwfGc&t=844s"}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project2}
                type={"Feature Project"}
                title={"Your SALARY is NOT ENOUGH!! | WSO |"}
                summary={"Salary to maintain simple living standard in nepal."}
                link={"https://www.youtube.com/watch?v=Qju3fqYHQIM"}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project4}
                type={"Feature Project"}
                title={"Television is DEAD! | Binayak Kuikel | WSO"}
                summary={"Current Television situation in Nepal."}
                link={"https://www.youtube.com/watch?v=bdu6YBwZIho"}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project3}
                type={"Feature Project"}
                title={
                  "Rabi Lamichhane Could Get Jailed soon? | Sahakari Kanda Explained"
                }
                summary={
                  "Rabi Lamichhane, a well-known figure in Nepal, has recently been embroiled in controversy."
                }
                link={"https://www.youtube.com/watch?v=5LR4UNI4F_k"}
              />
            </div>
            <div></div>
            {/* <div className="col-span-12">
              <FeatureProject
                githublink="/"
                img={project1}
                type={"Feature Project"}
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
              />
            </div> */}
            {/* <div className="col-span-6">
              {" "}
              <Project
                githublink="/"
                img={project1}
                type={"Feature Project"}
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
              />
            </div> */}
            {/* <div className="col-span-6">
              {" "}
              <Project
                githublink="/"
                img={project1}
                type={"Feature Project"}
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
              />
            </div> */}
          </div>
        </Profilelayout>
      </main>
    </>
  );
};

export default Projects;
