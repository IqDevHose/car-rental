import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler;
}

const Button = ({
  isDisabled = false,
  btnType = "button",
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <motion.button
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
      disabled={isDisabled}
      type={btnType}
      className={`
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        gap-2
        px-6
        py-3
        rounded-lg
        font-semibold
        transform
        hover:scale-105
        active:scale-95
        bg-[#c28707]
        text-white
        hover:bg-red-500
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        disabled:hover:bg-red-600
        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-red-500
        before:to-rose-500
        before:opacity-0
        before:transition-opacity
        before:duration-300
        hover:before:opacity-100
        shadow-md
        hover:shadow-lg
        ${containerStyles}
      `}
      onClick={handleClick}
    >
      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className={`
          z-10
        `}
      >
        {title}
      </motion.span>

      {rightIcon && (
        <span
          className="
            relative
            z-10
            transition-transform
            duration-300
            hover:translate-x-1
          "
        >
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
};

export default Button;
