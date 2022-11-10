import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import Webcam from "react-webcam";
import "./style.css"

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default function StartTraining() {
    const [open, setOpen] = useState(true)
    const size = useWindowSize();
    const handleClose = ()=>{
        setOpen(false)
    }

    const isLandscape = size.height <= size.width;
    const ratio = isLandscape ? size.width / size.height : size.height / size.width;

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

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
            style={{position:'absolute', top:0, left:0, zIndex:-10}}
            audio={false}
            height={size.height} 
            width={size.width}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            videoConstraints={{facingMode: 'environment', aspectRatio: ratio}}
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
