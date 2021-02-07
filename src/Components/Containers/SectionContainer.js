import React from "react";

const SectionContainer = ({ children, sectionName }) => {
  return (
    <section className={`section-container ${sectionName}`}>{children}</section>
  );
};

export default SectionContainer;
