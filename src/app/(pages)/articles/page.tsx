"use client";

import AnimatedText from "@/components/AnimatedText";
import Profilelayout from "@/components/Profilelayout";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import paginationImg from "../../../../public/images/articles/pagination component in reactjs.jpg";
import { motion, useMotionValue } from "framer-motion";
import { MouseEventHandler, useRef } from "react";

interface Props {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

interface Prop{
  img: StaticImageData;
  title: string;
  
  link: string;
  data: string;
}
const FramerImage = motion(Image);

interface Movimg{
  title:string
  img:StaticImageData
  link:string
}

const MovingImage=({title,img,link}:Movimg)=>{
  const x=useMotionValue(0)
  const y=useMotionValue(0)
  const imgref=useRef<HTMLImageElement>(null)

  function handleMouse(event:  React.MouseEvent<HTMLAnchorElement>) {
    if(imgref.current)
        imgref.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  
  function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement>) {
    if(imgref.current){

      imgref.current.style.display="none";
    }
    x.set(0);
    y.set(0);
  }

  return (
    <>
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
          <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light">{title}</h2>
          <Image ref={imgref} src={img} alt={title} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
          className="w-96 rounded-lg absolute hidden h-auto"/>
        </Link>
    </>
  )

}

const Article = ({ img, title, data, link }: Prop) => {
  return (
    <>
      <li className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0  border border-solid border-dark  border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light">
        <MovingImage title={title} img={img} link={link} />
        <span className="font-semibold pl-4 text-primary ">{data}</span>
      </li>
    </>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }: Props) => {
  return (
    <>
      <li className="col-span-1  w-full p-4 relative bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark dark:bg-light rounded-[2rem]  rounded-br-3xl" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            priority
            src={img}
            alt={title}
          />
        </Link>

        <Link href={link} target="_blank">
          <h2 className="capitalize text-2xl font-bold my-2 hover:underline dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="text-sm mb-2 dark:text-light">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold ">{time}</span>
      </li>
    </>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Raju Basnet |About</title>
        <meta name="description" content="Raju" />
      </Head>
      <main className="w-full mb-16 flex-col flex items-center justify-center overflow-hidden">
        <Profilelayout classname="!pt-16 ">
          <AnimatedText
            classname="!text-8xl !mb-16"
            text="Words Can Change The World!"
          />
          <ul className="gap-16 grid-cols-2 grid">
            <FeatureArticle
              img={paginationImg}
              title={"Build A Custom Pagination Component In Reactjs From Scratch"}
              time={"9 min read"}
              summary={"Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
              link={"/"}          />
            <FeatureArticle
              img={paginationImg}
              title={"Build A Custom Pagination Component In Reactjs From Scratch"}
              time={"9 min read"}
              summary={"Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
              link={"/"}   />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            <Article img={paginationImg} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs ndHandling"} link={"/"} data={"This website is made ny Nimesh Regmi"}/>
            
          </ul>
        </Profilelayout>
      </main>
    </>
  );
};

export default page;
