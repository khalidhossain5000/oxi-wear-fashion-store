import React from "react";

const SecondaryButton = ({ children, className, Icon, spanClassName,iconClass }) => {

  return (
    <button
      className={`hover:scale-110 transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-px focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
      <span
        className={`font-manrope inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-accent px-7 text-sm lg:text-xl lg:font-bold font-medium text-foreground dark:text-text-primay backdrop-blur-3xl gap-2 ${spanClassName}`}
      >
        {Icon && <Icon size={20} className={`${iconClass}`}/>} {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
