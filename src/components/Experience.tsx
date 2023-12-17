import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicons from "./Liicons";

interface Props {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
const Detail = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) => {
  const ref=useRef<HTMLLIElement>(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[90%]">
      <Liicons reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.8,type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl xs:text-4xl text-center w-full mb-32 md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 sm:left-1 md:left-3 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top"
        />
        <ul className="items-start w-full flex flex-col justify-between ml-4">
          <Detail
            position="Software Engineer"
            company=" Google"
            time=" 2022-Present "
            address="Mountain View, CA"
            companyLink="http://www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <Detail
            position="Intern"
            company=" Facebook"
            time=" Summer 2021  "
            address=" Menlo Park, CA."
            companyLink="http://www.facebook.com"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
            share short-form video content, including designing and implementing a new user interface and developing 
            the backend infrastructure to support the feature."
          />
          <Detail
            position="Software Engineer"
            company=" Amazon"
            time=" 2020-2021  "
            address="Seattle, WA."
            companyLink="http://www.amazon.com"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <Detail
            position="Software Engineer Intern"
            company=" Microsoft"
            time=" Summer 2019  "
            address="Redmond, WA."
            companyLink="http://www.microsoft.com"
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
            including implementing a new user interface for a system settings panel and optimizing the performance of 
            a core system component."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
