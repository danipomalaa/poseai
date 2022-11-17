import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar } from '@mui/material'
import React, { useState, useEffect, useRef, useContext } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import Webcam from "react-webcam";
import kata1audio from './../../SourceMedia/kata1.mp3'
import "./style.css"
import { PoseContext } from "./../../Context/index"
import * as posedetection from '@tensorflow-models/pose-detection';
import PictureList from './PictureList';
import Kata1Video from './kata1.mp4'

import useQuery from '../../Utils/QueryParams';

// w

export default function StartTraining(props) {
    const [open, setOpen] = useState(true)
    const [imgList, setImgList] = useState([])
    // const size = useWindowSize();
    const handleClose = ()=>{
        setOpen(false)
        setOpenFinish(false)
    }

    let query = useQuery();
    const size_width = query.get("width")
    const size_height = query.get("height")
    const isLandscape = query.get("isLandscape")
    const ratio = query.get("ratio")

    // const isLandscape = size.height <= size.width;
    // const ratio = isLandscape ? size.width / size.height : size.height / size.width;

    const webcamRef = React.useRef(null);
    const audioRef = React.useRef(null);

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
  }

    const capture = ()=>{
        const _start = !start
        const imageSrc = webcamRef.current.getScreenshot();
        console.log('imgList', imgList)
        setImgList([...imgList, {img:imageSrc, time: timer} ])
        addPose({id:makeid(5),label:"", img:imageSrc, time: timer})
        return _start
    }

    const [timer, setTimer] = useState(0); // 25 minutes
    const [start, setStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef(); // <-- React ref

    const buttonRecording = async() =>{
      const res = await toggleStart()
      console.log('timer', timer)
      if(res){
        setStartRecording(false)
      }
      else{
        setStartRecording(true)
      }
    }
    

    useEffect(() => {
        if (firstStart.current) {
          firstStart.current = !firstStart.current;
          return;
        }
        if (start || startRecording) {
          tick.current = setInterval(() => { // <-- set tick ref current value
            setTimer((timer) => {
              let _timer = timer + 1
              console.log('_timer', _timer)
              capturePose(_timer)
              return _timer
            });
          }, 1000);
        } else {
          clearInterval(tick.current); // <-- access tick ref current value
        }
        return () => clearInterval(tick.current); // <-- clear on unmount!
      }, [start, capturePose]);

      function capturePose(){
        const captureListCheck = kihonList.filter(x=>x === (timer))
        console.log('captureListCheck', captureListCheck.length, 'start', start, 'timer', timer, 'startRecording', startRecording)
        if(captureListCheck.length == 1){
          capture();
          if(timer === 90)
          {
            setOpenFinish(true)
          }
        }
      }

    const [startRecording, setStartRecording] = useState(false)

    const { dataPoses, addPose, deletePose, changeLabel, kihonList } = useContext(PoseContext)

    const play_audio = ()=>{
        const audio = audioRef.current
        audio.play()
    }

    const stop_audio = ()=>{
        const audio = audioRef.current
        audio.pause()
    }

    const toggleStart = () => {
      const buff = !start
        setStart(()=>{
          if(buff){
            play_audio()
          }
          else{
            stop_audio()
          }
          return buff
        });
      return buff
    };

    const [openFinish,setOpenFinish] = useState(false)

    
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

        <Dialog
            open={openFinish}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            Lanjut Penilaian
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-description">
                   Lanjutkan proses penilaian dengan pelatihan AI anda.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{props.history.push('/app/training/estimation')
                }} autoFocus>
                    Proses
                </Button>
            </DialogActions>
        </Dialog>
        
        <Webcam
            style={{position:'absolute', top:0, left:0, zIndex:-10}}
            audio={false}
            mirrored={true}
            height={size_height} 
            width={size_width}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            videoConstraints={{facingMode: 'user', aspectRatio: ratio}}
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
        <div style={{position:'absolute', bottom:50,zIndex:10}}>
            <Grid container spacing={2}>
              
            
            {imgList.map((itemTake,index)=>{
                return(
                    <Grid item xs="3">
                      <img src={itemTake.img} style={{width:'100%'}} />
                      <br/>
                      <div style={{color:'white', backgroundColor:'black', width:'100%', fontSize:'bold'}}>Time :{itemTake.time}</div>
                    </Grid>
                )
            })}
            </Grid>
        </div>
        <h1 style={{color:'white'}}>Timer : {timer} Player : {start? "Start": "Stop"} </h1>
        <h1 style={{color:'white'}}>Timeline : {JSON.stringify(kihonList)} </h1>
        <audio ref={audioRef} src={kata1audio} controls style={{display:'none'}}/>
        <AppBar position="fixed" sx={{ top: 'auto', backgroundColor:"#2f2f2f", bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>{
                buttonRecording()
            }}>
            {
              start ? "Pause" : "Play"
            }
                
            </Button>
        </AppBar>
    </Container>
  )
}
