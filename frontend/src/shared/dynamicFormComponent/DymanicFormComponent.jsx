import React from "react";
import { formComponentPropTypes } from "./formComponentProp";
import { TextField } from "@material-ui/core";

const DynamicFormComponent = (props) => {
  if (props.type === "TextField" || props.type === "Password") {
    return (
      <TextField
        error={props.hasError}
        id={props.id}
        label={props.label}
        value={props.value}
        variant={props.variant}
        type={props.type === "Password" ? "password" : ""}
        onChange={props.onChange}
        helperText={props.hasError && props.helperText}
      />
    );
  } else {
    return <p>Component not supported!</p>;
  }
};

DynamicFormComponent.propTypes = formComponentPropTypes;

export default DynamicFormComponent;
