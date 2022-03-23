import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const style = {
  mt:2,
  ml: 2,
  width: {sm: 200, md: 300},
  backgroundColor: { xs: "secondary.light", sm: "#eaeaea" },
  boxShadow: 6,
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: 'orange' }
  }
}

const CustomStyledTextFields = () => {
  return (
    <Stack>
      <TextField
        sx={{
          ...style,
          mb:2,
          mr:2,
          border: "solid 2px blue",
          "& .MuiFilledInput-input": { color: "red" }
        }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <TextField
        sx={{
          ...style
        }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </Stack>
  )
}

export default CustomStyledTextFields