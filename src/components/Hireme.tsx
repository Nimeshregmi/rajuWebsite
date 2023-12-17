import Link from "next/link"
import { CircularText } from "./Icons"



const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden  md:right-8 md:absolute md:left-auto md:top-2 md:bottom-auto">
        <div className=" w-48 md:w-24 h-auto flex items-center justify-center relative">
            <CircularText className="fill-dark dark:fill-light animate-spin-slow"/>
            <Link href="mailto:abcd@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid dark:border-light border-dark w-20 h-20 rounded-full font-semibold dark:hover:bg-dark  hover:bg-light hover:text-dark dark:hover:text-light
            md:w-12 md:h-12 md:text-[10px]
            ">Hire Me</Link>
        </div>
      
    </div>
  )
}

export default Hireme
