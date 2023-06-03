import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-xl font-bold capitalize">{children}</h1>;
};

export default SectionTitle;
