import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import React from "react";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
