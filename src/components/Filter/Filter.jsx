import React from "react";
import TextField from '@mui/material/TextField';

const Filter = ({ value, onChange }) => {
  return (<>
    
          <TextField id="filled-basic" label="Find contact:" variant="filled" type="text" name="" value={value} onChange={onChange} />
</>
  );
};

export default Filter;


