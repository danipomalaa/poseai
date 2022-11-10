import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export default function AddTraining(props) {
    
    useEffect(()=>{

    },[])
  return (
    <Container maxWidth="sm">

        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Arah Kamera</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Video Latihan</MenuItem>
            </Select>
        </FormControl>
        <div style={{mb:1, width:'100%', height:80}}>
            <img />
        </div>
        <Typography>Gerakan Dasar</Typography>

        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>props.history.push('/app/training/StartTraining')}>Mulai Latihan</Button>
        </AppBar>
    </Container>
  )
}
