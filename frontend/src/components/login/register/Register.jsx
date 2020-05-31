import React, { useState } from "react";
import { Button, Grid, FormControl } from "@material-ui/core";
import { registerControlDefinition } from "./registerControlDefinition";
import DynamicFormComponent from "../../../shared/dynamicFormComponent/DymanicFormComponent";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../../../store/actions/appActions";
import _ from "lodash";

const Register = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(registerControlDefinition);

  const onChange = (event, id) => {
    const predicate = (key) => key.id === id;
    const index = state.findIndex((key) => predicate(key));
    const control = state.find((key) => predicate(key));
    const duplicateArray = [...state];

    const updatedControl = {
      ...control,
      value: event.target.value,
    };

    duplicateArray[index] = updatedControl;
    setState(duplicateArray);
  };

  const updateError = (
    state,
    control,
    updatedValidation,
    controlIndex,
    validationIndex
  ) => {
    const duplicateValidationArray = [...control.validation];
    duplicateValidationArray[validationIndex] = updatedValidation;

    const updatedControl = {
      ...control,
      validation: [...duplicateValidationArray],
    };
    const duplicateArray = [...state];
    duplicateArray[controlIndex] = updatedControl;

    return duplicateArray;
  };

  const submit = () => {
    if (isValid()) {
      dispatch(registerUserAsync({
        email: _.find(state, {"id": "emailId"}).value,
        username: _.find(state, {"id": "username"}).value,
        dob: _.find(state, {"id": "dob"}).value,
        password: _.find(state, {"id": "password"}).value
      }))
    }
  }

  const isValid = () => {
    let valid = true;
    let duplicateState = [];
    state.forEach((control) => {
      let duplicateValidation = [];
      control.validation.forEach((validation) => {
        duplicateValidation.push({ ...validation });
      });
      duplicateState.push({
        ...control,
        validation: duplicateValidation,
      });
    });
    state.forEach((control, controlIndex) => {
      control.validation.forEach((validation, validationIndex) => {
        if (validation.type === "MIN_LENGTH") {
          if (control.value.length < validation.minValue) {
            duplicateState = updateError(
              duplicateState,
              control,
              {
                ...validation,
                hasError: true,
              },
              controlIndex,
              validationIndex
            );
            valid = false;
          } else if (validation.hasError) {
            duplicateState = updateError(
              duplicateState,
              control,
              {
                ...validation,
                hasError: false,
              },
              controlIndex,
              validationIndex
            );
          }
        }
      });
    });
    setState(duplicateState);
    return valid;
  };

  return (
    <div>
      <p>New users, please sign up.</p>
      <form>
        <Grid container spacing={4}>
          {state.map((definition, index) => {
            return (
              <Grid item xs={12} key={index}>
                <FormControl fullWidth variant="outlined">
                  <DynamicFormComponent
                    type={definition.type}
                    id={definition.id}
                    value={definition.value}
                    variant={definition.variant}
                    label={definition.label}
                    hasError={definition.validation[0].hasError}
                    helperText={definition.validation[0].helperText}
                    onChange={(event) => onChange(event, definition.id)}
                  />
                </FormControl>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={submit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
