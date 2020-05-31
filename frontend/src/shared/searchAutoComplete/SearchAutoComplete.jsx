
/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchAutoComplete = () => {
  return (
      <Autocomplete
        id="search-auto-complete"
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search" margin="normal" variant="outlined" />
        )}
      />
  );
}

export default SearchAutoComplete;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 }
];
