import React, {useState} from "react";
import { TextField, Button,Typography, Paper} from "@mui/material/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '', title: '', tags: '', selectedFile:''
  })

  const handleSubmit = ()=> {

  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'> Memory Reflections</Typography>
        <TextField name='creator' variant ='outlined' label='Creator' fullWidth value={postData.creator} onChange={}/>
      </form>
    </Paper>
  )
};

export default Form;
