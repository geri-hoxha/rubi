import { ReactNode, useEffect, useRef, useState } from "react";

interface IProps {
  children: ReactNode;
  element: ReactNode;
}

const Popover: React.FC<IProps> = ({ element, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const popoverRef = useRef(null); // Reference for the popover

  // Close the popover if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div onClick={togglePopover} >
        {children}
      </div>

      {/* Popover content */}
      {isOpen && (
        <div
          ref={popoverRef} // Attach the reference to the popover
          className="absolute z-50 w-full right-60 top-14"
        >
          {element}
        </div>
      )}
    </div>
  );
};

export default Popover;
