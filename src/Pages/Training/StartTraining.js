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
    const [imgList, setImgList] = useState([])
    const size = useWindowSize();
    const handleClose = ()=>{
        setOpen(false)
    }

    const isLandscape = size.height <= size.width;
    const ratio = isLandscape ? size.width / size.height : size.height / size.width;

    const webcamRef = React.useRef(null);
    const audioRef = React.useRef(null);

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    const capture = ()=>{
        // const imageSrc = webcamRef.current.getScreenshot();
        // console.log('imgList', imgList)
        // setImgList([...imgList, imageSrc])

        const video = webcamRef.current
        const videoWidth = video.videoWidth
        const videoHeight = video.videoHeight

        video.width = videoWidth
        video.height= videoHeight

        canvasSnapRef.current.width = videoWidth
        canvasSnapRef.current.height = videoHeight
        var ctxSnap = canvasSnapRef.current.getContext("2d");
        ctxSnap.drawImage(video, 0, 0, canvasSnapRef.current.width, canvasSnapRef.current.height);
        // console.log('ctxSnap', ctxSnap)
        //convert to desired file format
        console.log('canvasSnapRef.current', canvasSnapRef.current)
        var dataURI = canvasSnapRef.current.toDataURL('image/jpeg'); // can also use 'image/png'
        console.log('dataURI', dataURI)

        // setImageScreenShoot(dataURI)
        
        // let _dataPose = dataPose
        // setDataPoseScreenShoot(dataPose)

        let dataTake = {id: makeid(10), img: dataURI}
        let dataConcat = [...imgList, dataTake]

            

        setImgList(dataConcat)
    }

    const [timer, setTimer] = useState(0); // 25 minutes
    const [start, setStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef(); // <-- React ref

    useEffect(() => {
        if (firstStart.current) {
          firstStart.current = !firstStart.current;
          return;
        }
        cekTimer()
        capturePose()
        if (start) {
          tick.current = setInterval(() => { // <-- set tick ref current value
            setTimer((timer) => timer + 1);
          }, 1000);
        } else {
          clearInterval(tick.current); // <-- access tick ref current value
        }
        return () => clearInterval(tick.current); // <-- clear on unmount!
      }, [start, cekTimer, capturePose]);

      function capturePose(){
        // const captureListCheck = kihonList.filter(x=>x === timer)
        // if(captureListCheck.length == 1 && !start){
        //     setTimeout(() => {
        //         // play_audio()
        //         // setStart(true)
        //         capture()
        //     }, 2000);
        // }
      }
      
      function cekTimer(){
        // console.log('timer', timer)
        // const captureListCheck = kihonList.filter(x=>x === timer)
        // console.log('captureListCheck', captureListCheck)
        // console.log('start', start)
        // if(captureListCheck.length == 1){
        //     stop_audio()
        //     setStart(false)
        //     capturePose()
        // }
      }

    const kihonList = [6,9,13,16,20,25,28,32,37,43,47,50,52,57,60,64,68,73,78,84,90]

    const playRecording = ()=>{

    }

    const [timerRecording, setTimerRecording] = useState(0)

    const [startRecording, setStartRecording] = useState(false)

    const { dataPoses, addPose, deletePose, changeLabel } = useContext(PoseContext)

    const play_audio = ()=>{
        const audio = audioRef.current
        setStartRecording(true)
        audio.play()
    }

    const stop_audio = ()=>{
        const audio = audioRef.current
        setStartRecording(false)
        audio.pause()
    }

    const toggleStart = () => {
        setStart(!start);
    };

    const deletedata = (id)=>{
        const changeData = imgList.filter(x=>x.id !== id)
        deletePose(id)
        setImgList(changeData)
      }

    const [displayImage, setDisplayImage] = useState(true)

    const changeData = (e, id)=>{
        const changeData = imgList.map(item=>{
          if(id === item.id){
            return {...item, label: e.target.value}
          }
          else{
            return item
          }
        })
        setImgList(changeData)
      }

    const canvasSnapRef = useRef(null)

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
        
        {/* <Webcam
            style={{position:'absolute', top:0, left:0, zIndex:-10}}
            audio={false}
            mirrored={true}
            height={size.height} 
            width={size.width}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            videoConstraints={{facingMode: 'user', aspectRatio: ratio}}
        /> */}
        <div style={{position:"relative", border:"1px solid #000", width:300, height:100, textAlign:'center'}}>
            <video ref={webcamRef} 
                // src="https://danipomalaa.github.io/karateai/static/media/kata1.cf119420ef19f8257186.mp4" 
                src={Kata1Video}
                screenshotFormat="image/jpeg"
                controls
                style={{
                position:'absolute',
                width:size.width, height:size.height,
                top:0, left:0,
                zIndex:10,
                textAlign:'center'
            }} />

            <canvas ref={canvasSnapRef} style={{
                    position:'absolute',
                    border:"1px solid #000",
                    width:size.width, height:size.height,
                    top:0, left:0,
                    // marginLeft:'auto',
                    // marginRight:'auto',
                    zIndex:8,
                    textAlign:'center'
                    }}
            />
        </div>
        
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
        <div style={{display:'flex', overflowX:'scroll', WebkitOverflowScrolling:'touch', position:'absolute', bottom:50,zIndex:10}}>
            
            {imgList.map((itemTake,index)=>{
                return(
                    <PictureList displayImage={displayImage} deletedata={()=>deletedata(itemTake.id)} change={e=>changeData(e, itemTake.id)} label={itemTake.label} video={webcamRef.current} data={itemTake} index={index}/>
                    // <img src={itemImg} style={{height:100}} />
                )
            })}
        </div>
        {/* <h1>{timer}</h1> */}
        <audio ref={audioRef} src={kata1audio} controls style={{display:'none'}}/>
        <Button variant="contained" color="primary" onClick={toggleStart}>{!start ? "START" : "STOP"}</Button>
        <AppBar position="fixed" sx={{ top: 'auto', backgroundColor:"#2f2f2f", bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>{
                const video = webcamRef.current;
                if(!start){
                    // stop_audio()
                    video.pause()
                     toggleStart()
                    // capture()
                }else{
                    // play_audio()
                    video.play()
                     toggleStart()
                }}}>{

                    !start ? "Pause" : "Play"
                }
                
            </Button>

            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>{
                capture()
            }}>
                Take Capture
            </Button>

        </AppBar>
    </Container>
  )
}
