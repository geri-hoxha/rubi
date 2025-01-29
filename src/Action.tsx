import { ReactNode } from "react";

const Action: React.FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={`border-4 border-[#090C1D] flex items-center justify-center font-semibold bg-[#2C2852] w-11 h-11 rounded-2xl cursor-pointer hover:bg-[#463E7A] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Action;
