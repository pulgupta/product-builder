export const registerControlDefinition = [
  {
    type: "TextField",
    id: "emailId",
    label: "Email Id",
    value: "",
    variant: "outlined",
    validation: [
      {
        type: "MIN_LENGTH",
        minValue: 10,
        hasError: false,
        helperText: "Please enter a valid value for emailid",
      },
    ],
  },
  {
    type: "TextField",
    id: "username",
    label: "Username",
    value: "",
    variant: "outlined",
    validation: [
      {
        type: "MIN_LENGTH",
        minValue: 8,
        hasError: false,
        helperText: "Please enter a valid value for username",
      },
    ],
  },
  {
    type: "TextField",
    id: "dob",
    label: "Date of birth",
    value: "",
    variant: "outlined",
    validation: [
      {
        type: "MIN_LENGTH",
        minValue: 10,
        hasError: false,
        helperText: "Please enter a valid value for date of birth",
      },
    ],
  },
  {
    type: "Password",
    id: "password",
    label: "Choose Password",
    value: "",
    variant: "outlined",
    validation: [
      {
        type: "MIN_LENGTH",
        minValue: 8,
        hasError: false,
        helperText: "Please enter a valid value for password",
      },
    ],
  },
  {
    type: "Password",
    id: "confirmpassword",
    label: "Confirm Password",
    value: "",
    variant: "outlined",
    validation: [
      {
        type: "MIN_LENGTH",
        minValue: 8,
        hasError: false,
        helperText: "Please enter a valid value for password",
      },
    ],
  },
];
