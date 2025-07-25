import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string; 
}

const Heading: React.FC<HeadingProps> = ({ children, className = "font-bold font-sink text-3xl my-4" }) => {
  return <h2 className={className}>{children}</h2>;
};

export default Heading;