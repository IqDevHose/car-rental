import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
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
    type={btnType || "button"}
    className={`overflow-hidden custom-btn ${containerStyles}`}
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
      className={`flex-1 ${textStyles}`}
    >
      {title}
    </motion.span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <img src={rightIcon} alt="arrow_left" className="object-contain" />
      </div>
    )}
  </motion.button>
);

export default Button;
