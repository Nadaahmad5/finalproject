import * as React from 'react';
import androidScreen from "../imgs.png/androidScreen.png";
import iphoneScreen from '../imgs.png/iPhoneScreen.png'
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import instagram from '../imgs.png/instagram-logo.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

export default function SixthPage() {
    return(
        <Box style={{backgroundColor:"black"}}> 
        <img src={androidScreen}></img>
        <img style={{paddingRight:"35%"}} src={iphoneScreen}></img>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1D1D1D', height: '90vh' , width:'80vh'}} >
            <br></br>
        <img style={{width:"30%"}} src={instagram}/>
        <br></br>
      <br></br>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{ backgroundColor:"white", outlineColor:"black", color:"white", width:"80%"}} id="outlined-basic" label="Mobile number or Email" variant="outlined" />
      <TextField style={{ backgroundColor:"white", outlineColor:"black", color:"white", width:"80%"}} id="outlined-basic" label="Password" variant="outlined" />
      <Button style={{width:"80%"}} variant="contained">Login</Button>
      <br></br>
      <br></br>
        <Button style={{width:"90%"}} variant="contained" startIcon={<FacebookRoundedIcon />}>
        Login with Facebook
      </Button>
      
     
      
      <br></br>
      <br></br>
      <p style={{color:"white"}}>Forgot Password? </p>
      </Box>
        </Box>
        <br>
        </br>
        
      </Container>
    </React.Fragment>

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1D1D1D', height: '15vh', width:'80vh' }}>
        <p style={{color:"white"}}>Don't have an account?</p>
        <Link href="#" underline="none">
        {'Sign up'}
      </Link>
        </Box>
      </Container>
    </React.Fragment>
    </Box>
    )
}