import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, FormControl, OutlinedInput, InputAdornment, InputLabel, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Register(props) {

  useEffect(() => {
  }, [])

  return (
    <Container maxWidth="sm">
      <FormControl sx={{ mt:1, mb:1,width:'100%'}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Cari Dojo</InputLabel>
        <OutlinedInput
          sx={{width:'100%',}}
          id="outlined-adornment-password"
          startAdornment={
            <InputAdornment position="start" >
              <IconButton
                aria-label="toggle password visibility"
                edge="start"
              >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      {[1,2,3,4,5].map(item=>{
        return(
          <Box
            onClick={()=>props.history.push('/app/registration/dojo')}
            sx={{borderRadius:2, 
            width:'100%',
            height:153,
            mb:1,
            border:'1px solid #CFCFCF'}}>
              <Grid container>
                <Grid item xs={5} style={{display:'block', overflow:'hidden'}}>
                  <img src="http://konidepok.or.id/wp-content/uploads/2015/09/JJS_Dojo.jpg" style={{ width:'100%'}}/>
                </Grid>
                <Grid item xs={7} sx={{p:2}}>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>Nama Dojo</Typography>
                    <Typography>***</Typography>
                  </div>
                  <Typography sx={{fontStyle:'italic', fontSize:14, color:'#AFAFAF'}}>Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum</Typography>
                  <Typography sx={{color:'Highlight'}}>85 Kohai. 5 Pelatih</Typography>
                </Grid>
              </Grid>
          </Box>
        )
      })}
      

    </Container>
  )
}
