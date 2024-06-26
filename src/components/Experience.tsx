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
            position="Video Editor"
            company=" Misguided Nepal"
            time=" 2024-Present "
            address="Pokhara, Nepal"
            companyLink="https://www.youtube.com/@MisguidedNepal"
            work="Responsible for editing and producing engaging video content, collaborating with the creative team to enhance visual storytelling and brand presence."
          />
          <Detail
            position="Motion Graphics Designer"
            company="Why So Offended ?"
            time=" 2024-Present "
            address=" Kathmandu, Nepal"
            companyLink="https://www.youtube.com/@WhySoOffended"
            work="Designs and animates dynamic motion graphics, enhancing visual content for diverse media platforms and collaborating with the creative team to elevate brand storytelling."
          />
          <Detail
            position="UI/UX Designer"
            company="MSM Entertainments"
            time=" 2023-Present  "
            address="Kathmandu,Nepal"
            companyLink="https://www.msmentertainments.com/"
            work="Designs user-friendly interfaces and enhances user experience, collaborating with developers and stakeholders to create engaging digital products."
          />
          <Detail
            position="Video Editor"
            company=" The Light Story"
            time="2023-Present"
            address="Nawalpur, Nepal"
            companyLink="/"
            work="Edited and produced video content, ensuring high-quality visuals and engaging storytelling for youtube"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
