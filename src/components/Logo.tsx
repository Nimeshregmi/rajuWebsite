'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionLinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1,repeat:Infinity}
        }}
        className="bg-dark w-16 h-16 dark:border-light border border-solid border-transparent  text-light flex items-center justify-center rounded-full font-bold text-xl"
      >
        Raju
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
