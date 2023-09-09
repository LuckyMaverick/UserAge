import React, {useState} from "react";
import { Box, FormControl, InputLabel, Button, Input} from "@mui/material";
import classes from "./../../styles/pages/add-user.module.scss"
import Card from "./common/Card";

const initialUserData = {name: "Jane", age: "18"}

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState(initialUserData)
  
  const handle = {
    inputChange(name, value) {
      setUser(prev => ({...prev, [name]: value}))
    },
    add() {
      addUser(user)
      setUser(initialUserData)
    }
  }
  
  return (
    <Card>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        className={classes["add-user-container"]}
      >
        <FormControl variant="standard" className={classes["user-input-container"]}>
          <InputLabel htmlFor="user-name">User Name</InputLabel>
          <Input id="user-name" placeholder={"Enter Name"} value={user.name}
                 onChange={e => handle.inputChange("name", e.target.value)}/>
        </FormControl>
        
        <FormControl variant="standard" className={classes["user-input-container"]}>
          <InputLabel htmlFor="user-age">Age (Years)</InputLabel>
          <Input id="user-age" placeholder={"Enter Age"} value={user.age}
                 onChange={e => handle.inputChange("age", e.target.value)} />
        </FormControl>
        
        <Button variant="contained" onClick={handle.add}>Add</Button>
      </Box>
    </Card>
  )
}

export default AddUser