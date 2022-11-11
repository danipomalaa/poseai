import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, FormControl, OutlinedInput, InputAdornment, InputLabel, Box, Grid, AppBar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Dojo(props) {
  return (
    <Container maxWidth="sm">
        <Box>
            <img src="http://konidepok.or.id/wp-content/uploads/2015/09/JJS_Dojo.jpg" style={{ width:'100%'}}/>
        </Box>
        <Box sx={{p:2}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h6" sx={{fontWeight:'bold'}}>Nama Dojo</Typography>
                <Typography>***</Typography>
            </div>
            <Typography sx={{fontStyle:'italic', fontSize:14, color:'#AFAFAF'}}>Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum</Typography>
            <Typography sx={{color:'Highlight'}}>85 Kohai. 5 Pelatih</Typography>

            <Typography variant="h6" sx={{fontWeight:'bold', mt:2}}>Tentang Dojo</Typography>
            <Typography sx={{fontStyle:'italic', fontSize:14, color:'#AFAFAF'}}>Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum</Typography>

            <Typography variant="h6" sx={{fontWeight:'bold', mt:2}}>Kontak</Typography>
            <Typography sx={{fontStyle:'italic', fontSize:14, color:'#AFAFAF'}}>Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum</Typography>
        </Box>
       <AppBar position="fixed" sx={{ top: 'auto', backgroundColor:"#2f2f2f", bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>props.history.push('/app/registration/form')}>Registrasi</Button>
        </AppBar>
    </Container>
  )
}
