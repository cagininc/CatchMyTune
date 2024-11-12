import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps{
children:ReactNode,
href?:string,
containerClassName?:string,
onClick?:()=>void;
icon?:ReactNode;


}



const Button = ({
  
  children,
  href,
  containerClassName,
  onClick,
  // icon

}:ButtonProps ) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4  rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
        
        </span>


        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl  group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g4 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
