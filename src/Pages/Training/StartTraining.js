import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar } from '@mui/material'
import React, { useState } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import Webcam from "react-webcam";

export default function StartTraining() {
    const [open, setOpen] = useState(true)
    const handleClose = ()=>{
        setOpen(false)
    }

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    const videoConstraints = {
        width: "100%",
        height: "100%",
        facingMode: "environment"
      };
  return (
    <Container maxWidth="sm">
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            Panduan
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-description">
                   Lakukan gerakan sesuai dengan aba-aba dari sistem untuk mengambil gerakan dengan sempurna
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>

        <Webcam
            audio={false}
            height={"100%"}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            width={"100%"}
            videoConstraints={videoConstraints}
        />
         {/* <button onClick={capture}>Capture photo</button> */}
        <div style={{backgroundColor:"#EFEFEF", opacity:0.5, padding:10, position:'absolute', bottom:100, left:40, minWidth:150}}>
            {
                ["Start", "Gedan Barai", "OiTsuki", "Uci Uke", "OiTsuki", "Gedan Barai"].map(item=>{
                    return(
                        <div>
                            <CheckIcon />
                            <Typography variant="small">{item}</Typography>
                        </div>
                    )
                })
            }
           
        </div>

        <AppBar position="fixed" sx={{ top: 'auto', backgroundColor:"#2f2f2f", opacity:0.5, bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}}>Rekam</Button>
        </AppBar>
    </Container>
  )
}
