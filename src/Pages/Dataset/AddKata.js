import React from 'react'
import { Typography, Button, IconButton, Paper, Container, TextField, FormControl, FormHelperText, AppBar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

export default function AddKata(props) {
  return (
    <Container maxWidth="sm" style={{flex:1}}>
        <FormControl sx={{ mt:1,mb:1,width:'100%'}} variant="outlined">
            <TextField
                style={{flex:1}}
                id="outlined-required"
                label="Nama Kata"
            />
        </FormControl>
        <Paper
        component="form"
        sx={{ mt:1,mb:1, display: 'flex', alignItems: 'center' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Kihon / Gerakan Dasar"
                inputProps={{ 'aria-label': 'Kihon / Gerakan Dasar' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <AddIcon />
            </IconButton>
        </Paper>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, p:2, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>props.history.push('/app/dataset')}>Simpan</Button>
        </AppBar>
        
    </Container>
  )
}
