"use client"
import {motion} from "framer-motion"

interface props {
  text: string;
  classname?: string;
}

const quote={
    initial:{opacity:1},
    animate:{
        opacity:1,
        transition:{delay:0.5,
            staggerChildren:0.09
        }
    }
}
const quoteChildren={
    initial:{opacity:0,y:75},
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const AnimatedText = ({ text, classname = "" }: props) => {
  return (
    <div className="flex items-center justify-center w-full py-3 mx-auto text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`${classname} text-dark dark:text-light inline-block w-full font-bold capitalize text-5xl `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
        text.split(" ").map((words, index) => (
          <motion.span className="inline-block"
          variants={quoteChildren}
          
          key={words + "-" + index}>{words}&nbsp;</motion.span>
        ))
        }
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
