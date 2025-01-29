import { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="relative text-sm font-bold text-white transition-all duration-300 roobet_button rounded-xl py-1.5 px-3.5 pb-2.5">
      <div className="absolute top-0 left-2 w-1 h-0.5 bg-white rounded-full"></div>
      <span className="relative overflow-hidden p-0.5 font-extrabold whitespace-nowrap overflow-ellipsis">
        <span
          className="absolute left-0.5  z-[-10]"
          style={{ WebkitTextStroke: "2px #c56a18" }}
        >
          {children}
        </span>
        <span
          className="absolute left-0.5 top-[3px] z-10"
          style={{ WebkitTextStroke: "2px #c56a18" }}
        >
          {children}
        </span>
        <span className="relative z-20">{children}</span>
      </span>
    </button>
  );
};


const InactiveButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="relative text-sm font-bold border-4 border-[#090C1D] text-white transition-all duration-300 inactive_roobet_button   rounded-xl py-1.5 px-3.5 pb-2.5">
      <div className="absolute top-0 left-2 w-1 h-0.5 bg-white rounded-full"></div>
      <span className="relative overflow-hidden p-0.5 font-extrabold whitespace-nowrap overflow-ellipsis">
        <span
          className="absolute left-0.5  z-[-10]"
          style={{ WebkitTextStroke: "2px #c56a18" }}
        >
          {children}
        </span>
 
        <span className="relative z-20 text-xs">{children}</span>
      </span>
    </button>
  );
};

export {InactiveButton};

export default Button;
