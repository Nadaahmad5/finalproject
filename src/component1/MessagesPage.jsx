
import React from "react";
import Grid from '@mui/material/Grid';
import Mss from "./Mss";
import Msslogo from "./Msslogo";


function MessagesPage(){
    return(
<div>
<Grid container spacing={0}>
<Grid item xs={3}>
</Grid>
<Grid item xs={3}>
<Mss/>
</Grid>

<Grid item xs={5}>
    <Msslogo/>
    </Grid>
</Grid>
</div>

    )
}
export default MessagesPage;




    
    

