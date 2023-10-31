"use client";

const Tag = ({ containerStyles, textStyles, title }) => (
  <div
    className={`custom-btn border-l-4 py-1 border-primaryColor mb-3 ${containerStyles}`}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </div>
);

export default Tag;
