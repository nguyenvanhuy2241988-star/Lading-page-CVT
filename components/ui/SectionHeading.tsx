import React from 'react';

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-7">
      <h2 className="text-2xl font-bold mb-1.5 text-text-main">{title}</h2>
      <p className="text-sm text-text-muted max-w-[560px] mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;