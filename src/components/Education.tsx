import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicons from "./Liicons";

interface Props {
  type: string;
  time: string;
  place: string;
  info: string;
}
const Detail = ({
  type,time,place,info
}: Props) => {
  const ref=useRef<HTMLLIElement>(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[70%] sm:w-[90%] mx-auto flex flex-col items-start justify-between">
      <Liicons reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.8,type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl text-center w-full mb-32 xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className="w-[75%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 sm:left-1 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top"
        />
        <ul className="items-start w-full flex flex-col justify-between ml-4">
          <Detail
            type="Bachelor in Science"
            time="2022-2026 "
            place="Trichandra College"
            info="Relevant courses included Biology, Geology, Botany etc."
          />
           <Detail
            type="Graphic Design Online Course"
            time="2022-2022"
            place="It tranning nepal"
            info="Completed a Full course in Graphic Designing."
          />
          {/* <Detail
            type="Online Course Work"
            time="2011-2020 "
            place="Udemy"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering.
            "
          />  */}
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
