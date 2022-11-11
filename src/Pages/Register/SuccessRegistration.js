import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, FormControl, OutlinedInput, InputAdornment, InputLabel, Box, Grid, AppBar, Input, FormHelperText, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function SuccessRegistration(props) {
  return (
    <Container maxWidth="sm">
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>Registrasi Berhasil</Typography>
        </Box>
    </Container>
  )
}
