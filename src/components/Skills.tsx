"use client"
import {motion} from "framer-motion"


interface Props{
  name:string;
  x?:string;
  y?:string;
}
const Skill=({name,x='',y=''}:Props)=>{
    return (
      <motion.div className="flex items-center justify-center font-semibold cursor-pointer dark:bg-light dark:text-dark bg-dark text-light
       rounded-full
       p-8 py-3 shadow-dark dark:shadow-light absolute  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-opacity-0 xs:dark:bg-opacity-0 xs:text-dark xs:dark:text-light xs:font-bold"
        whileHover={{scale:1.05}}
        initial={{x:0 ,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}}
        >
          {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-5xl mb-20 md:mb-0"> Skills</h2>
      <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight dark:bg-circulardark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       md:bg-circularLightMd md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm
       ">
        <motion.div className="flex items-center justify-center font-semibold cursor-pointer   dark:bg-light dark:text-dark bg-dark text-light rounded-full p-8 dark:shadow-light  shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-25vw" y="2vw"/>
        <Skill name="HTML" x="-5vw" y="-10vw"/>
        <Skill name="JavaScript" x="25vw" y="1vw"/>
        <Skill name="Next.js" x="0vw" y="12vw"/>
        <Skill name="Tailwind CSS" x="-16vw" y="-19vw"/>
        <Skill name="Django" x="16vw" y="-18vw"/>
        <Skill name="Flutter" x="-32vw" y="-8vw"/>
        <Skill name="Full stack" x="0" y="-25vw"/>
        <Skill name="Flutter Developer" x="-25vw" y="21vw"/>
        <Skill name="Flutter" x="18vw" y="18vw"/>
      </div>
    </>
  );
};

export default Skills;