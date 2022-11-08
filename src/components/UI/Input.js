import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* id={props.input.id} */}
      <input {...props.input} />
    </div>
  );
}
