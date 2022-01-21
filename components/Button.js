import React from "react";
import ButtonStyles from "../styles/Button.module.scss";

const Button = ({ title, github }) => {
  return <div className={ButtonStyles.button}>{title}</div>;
};

export default Button;
