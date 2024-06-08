'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

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
        className=" w-16 h-16 border-dark  border border-solid    flex items-center justify-center rounded-full "
      >
        <Image src={"/images/logo.png"} alt={""} className="rounded-full" width={100} height={100}/>
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
