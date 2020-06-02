/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    display: "block",
  },
  input: {
    backgroundColor: "rgba(255,255,255)",
    paddingTop: "0rem",
    marginTop: ".4rem"
  },
  autocomplete: {
    width: "30rem",
    paddingTop: "0rem",
    marginTop: "0rem"
  },
}));

const SearchAutoComplete = () => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.autocomplete}
      id="search-auto-complete"
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          margin="normal"
          variant="outlined"
          className={classes.input}
        />
      )}
    />
  );
};

export default SearchAutoComplete;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
