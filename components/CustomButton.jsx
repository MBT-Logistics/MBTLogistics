"use client";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  handleClick,
}) => (
  <button
    disabled={isDisabled}
    type={btnType || "button" || "submit"}
    className={`custom-btn rounded-md ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </button>
);

export default Button;
