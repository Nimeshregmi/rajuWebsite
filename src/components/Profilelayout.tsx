

interface props{
    children:JSX.Element[];
    classname?:string
}
const Profilelayout = ({children,classname=""}:props) => {
  return (
    <div className={`${classname} w-full h-full dark:bg-dark inline-block z-0 md:p-8 p-4 lg:p-32 pt-4 md:pt-5 lg:pt-5 bg-light `}>
      {children}
    </div>
  )
}

export default Profilelayout
