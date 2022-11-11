import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, FormControl, OutlinedInput, InputAdornment, InputLabel, Box, Grid, AppBar, Input, FormHelperText, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import QRCode from "react-qr-code";

export default function SuccessRegistration(props) {
  return (
    <Container maxWidth="sm">
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h6" sx={{fontWeight:'bold', mt:5}}>Registrasi Berhasil</Typography>
            <QRCode
                size={512}
                style={{ marginTop:15, marginBottom:15, height: "auto", maxWidth: "50%", width: "50%" }}
                value={"1234567"}
                viewBox={`0 0 512 512`}
            />
            <Typography>Tunjukkan QR Code pada pengurus Dojo untuk memverifikasi pendaftaran</Typography>
        </Box>
    </Container>
  )
}
