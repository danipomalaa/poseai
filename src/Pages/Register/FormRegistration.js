import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, FormControl, OutlinedInput, InputAdornment, InputLabel, Box, Grid, AppBar, Input, FormHelperText, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function FormRegistration(props) {
  return (
    <Container maxWidth="sm">
        <Box>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>Data Diri</Typography>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Foto Profil</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text" style={{width:'100%'}} />
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Nama Lengkap</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text"  style={{width:'100%'}} />
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Jenis Kelamin</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{display:'flex'}}
                >
                    <FormControlLabel value="L" control={<Radio />} label="Laki-laki" />
                    <FormControlLabel value="P" control={<Radio />} label="Perempuan" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Tempat Lahir</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text"  style={{width:'100%'}} />
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Tanggal Lahir</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="Date"  style={{width:'100%'}} />
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Alamat</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text"  style={{width:'100%'}} />
            </FormControl>
        </Box>
        <Box>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>Akun</Typography>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Email</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text" style={{width:'100%'}} />
            </FormControl>
            <FormControl sx={{width:'100%'}}>
                <FormLabel id="demo-radio-buttons-group-label">Nomor WA</FormLabel>
                <Input id="my-input" aria-describedby="my-helper-text" style={{width:'100%'}} />
            </FormControl>
        </Box>
        <AppBar position="fixed" sx={{ top: 'auto', backgroundColor:"#2f2f2f", bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>props.history.push('/app/registration/success')}>Submit</Button>
        </AppBar>
    </Container>
  )
}
