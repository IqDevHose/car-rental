import { MouseEventHandler } from "react";

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
    <button
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
        transition-all
        duration-300
        transform
        hover:scale-105
        active:scale-95
        bg-red-500
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
      <span
        className={`
          relative
          z-10
          transition-colors
          duration-300
          ${textStyles}
        `}
      >
        {title}
      </span>

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
    </button>
  );
};

export default Button;
