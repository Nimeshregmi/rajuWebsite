"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import {
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  // InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

interface CustomLinksProps {
  title: ReactNode;
  className?: string;
  href: string;
}
interface CustomMobileLinksProps {
  title: ReactNode;
  className?: string;
  href: string;
  toggle: Function;
}

const CustomMobileLinks = ({
  title,
  className = "",
  href,
  toggle,
}: CustomMobileLinksProps) => {
  const router = usePathname();
  const route = useRouter();
  const handleClick = () => {
    toggle();
    route.push(href);
  };
  return (
    <button onClick={handleClick} className="w-full my-1 flex flex-col">
      <motion.a
        className={`${className} relative group cursor-pointer text-light dark:text-dark 
      `}
      >
        {title}
        <span
          className={`h-1 bg-light dark:bg-dark inline-block absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router == href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </motion.a>
    </button>
  );
};

const CustomLinks = ({ title, className = "", href }: CustomLinksProps) => {
  const router = usePathname();
  // console.log(router)
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        className={`${className} relative group cursor-pointer
      `}
      >
        {title}
        <span
          className={`h-1 bg-dark dark:bg-light inline-block absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router == href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </motion.a>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const handleOnclick = () => {
    setisOpen(() => !isOpen);
  };
  return (
    <>
      <header
        className="w-full px-32  justify-between items-center py-8 font-medium flex
      z-10 lg:px-16 md:px-12 sm:px-6 dark:text-light relative"
      >
        {/* Button for small size for small screen */}
        <button
          className=" flex-col items-center justify-center text-3xl transition-all duration-500 left-0
           lg:flex hidden md:px-5 px-3 
           "
          //  hidden lg:flex
          onClick={handleOnclick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all block duration-300 h-1 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all block duration-300 h-1 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all block duration-300 h-1 w-6 rounded-sm  ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {/* for Mobile devices Menu of navbar */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-68%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`min-w-[70vw]  flex-col fixed justify-between items-center top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 py-12 rounded-lg backdrop-blur-md ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLinks
              href="/"
              title="Home"
              className="mr-4"
              toggle={handleOnclick}
            />
            <CustomMobileLinks
              className=""
              toggle={handleOnclick}
              href="/about"
              title="About"
            />
            <CustomMobileLinks
              className=""
              toggle={handleOnclick}
              href="/projects"
              title="Projects"
            />
          </nav>
          <nav className="flex items-center justify-center gap-5 sm:gap-3 flex-wrap mt-3">
            <motion.a
              href="https://twitter.com/being_basnet"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/raju-basnet-62637228a/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/beingrajubasnet/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://wa.me/9825997669"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <WhatsAppIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/beingbasnet/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 sm:ml-0 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.div>

        {/* For desktop and larger screen */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLinks href="/" title="Home" className="mr-4" />
            <CustomLinks href="/about" title="About" className="mx-4" />
            <CustomLinks href="/projects" title="Projects" className="mx-4" />
          </nav>
          <nav className="flex items-center justify-center gap-5 flex-wrap">
            <motion.a
              href="https://twitter.com/being_basnet"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/raju-basnet-62637228a/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/beingrajubasnet/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://wa.me/9825997669"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <WhatsAppIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/beingbasnet/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              className="w-6"
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] top-2">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
