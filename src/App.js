import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import styled from 'styled-components';




const Spacer = styled.div`

display: flex;
justify-content: center;
align-items: center;


`
const Spacer1 = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
const Spacer2 = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`

const Spacer3 = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
const Spacer4 = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`

function App() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Password2, setPassword2] = React.useState('');


  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleUsername = (event) => {
    event.preventDefault(); 
  
  

    if (Username === '') {
      alert('Please input a username');
    } else if (Username.length < 4) {
      alert('Username must be at least 4 characters long');
    } else if (Password === '') {
      alert('Please input a password');
    } else if (Password.length < 6) {
      alert('Password must be at least 6 characters long');
      setPassword('');
      setPassword2('');
    } else if (Password !== Password2) {
      alert('Passwords do not match');
 
      setPassword2('');
    } 
else{
    setUsername('');
    setPassword('');
    setPassword2('');
}
  };

  const handlePassword = (event) => {
    event.preventDefault(); 
  
  
    if (Password === "") {
      alert("Please input a username");
    } else if (Password.length < 6) {
      alert("Password must be at least 6 characters long");
    }
  };

  return (
   <>
      
<Spacer>
 

<h1> Validation Form</h1>

</Spacer>
      <Spacer1>
        <h2>Username</h2>
        <TextField
        
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}

          value={Username}
          onChange={(event) => setUsername(event.target.value)}

        />
        </Spacer1>
        <Spacer3>
  <h2>Enter Password</h2>
  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
      value={Password}
      onChange={(event) => setPassword(event.target.value)} // Update Password state
    />
  </FormControl>
</Spacer3>
<Spacer2>
  <h2>Re-Type Password</h2>
  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password2">Re-Type Password</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password2"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
      value={Password2}
      onChange={(event) => setPassword2(event.target.value)} // Update Password2 state
    />
  </FormControl>
</Spacer2>
      <Spacer4>
  <form onSubmit={handleUsername}> 
          <Button variant="outlined" size="large" type="submit">
            Submit
          </Button>
        </form>
        </Spacer4>
   </>
  );
}

export default App;
