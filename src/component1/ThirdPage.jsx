import React from "react";
import Grid from '@mui/material/Grid';
import Middle from "./Middle";
import Nada from './Nada'
import LeftSide from './LeftSide'

function ThirdPage(){
    return(
        <div>
            <Grid container spacing={2}>
        <Grid item xs={2.5}>
            <LeftSide/>
            </Grid>
            <Grid item xs={5}>
            <Nada/>
                
            </Grid>
            
            </Grid>
        </div>
    )
}
export default ThirdPage