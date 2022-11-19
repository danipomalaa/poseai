import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar, FormLabel, RadioGroup, Radio, FormControlLabel, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import useQuery from '../../Utils/QueryParams';
import kata1audio from './../../SourceMedia/kata1.mp3'
import kata2audio from './../../SourceMedia/kata2.mp3'

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

export default function AddTraining(props) {
    const size = useWindowSize();
    const isLandscape = size.height <= size.width;
    const ratio = isLandscape ? size.width / size.height : size.height / size.width;
    const [cameraTake, setCameraTake] = useState("user")
    let query = useQuery();
    const kata = query.get("kata")
    const memberid = query.get("memberid")
    const token = query.get("token")
  return (
    <Container maxWidth="sm" sx={{pt:1,pb:30}}>

        {/* <FormControl sx={{ mb:1,width:'100%', mt:1}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Arah Kamera</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Video Latihan</MenuItem>
            </Select>
        </FormControl> */}
        {/* <div style={{mb:1, width:'100%', height:80}}>
            <img />
        </div>
        <Typography>Gerakan Dasar</Typography> */}

        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Kamera</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={cameraTake}
            onChange={(e)=>{console.log('e',e.target.value);setCameraTake(e.target.value)}}
        >
            <FormControlLabel value="user" control={<Radio />} label="Depan" />
            <FormControlLabel value="environment" control={<Radio />} label="Belakang" />
        </RadioGroup>
        </FormControl>

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Video Dataset</FormLabel>
            <video src={`https://simari.id/Dataset/kata${kata}.mp4`} style={{width:'100%'}} controls />
        </FormControl>
        
        <Grid container spacing={2} sx={{mt:2}}>
            
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item=>{
                    return <Grid item xs={2}>
                        <img src={`https://simari.id/Dataset/Kata${kata}/${item}.jpg`} style={{width:'100%', height:100}} />
                    </Grid>
                })
            }
           
        </Grid>

        


        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, p:1, backgroundColor:'white' }}>
            <Alert severity="info" sx={{mt:1, mb:1}}>Sebelum memulai pelatihan pastikan anda sdh mengetahui urutan gerakan dasar (kihon) KATA {kata}. Dengar audio instrukso pelatihan untuk lebih jelasnya dibawah ini.</Alert>
            <audio src={kata ==="1"? kata1audio : kata2audio} style={{width:'100%'}} controls />
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>{
                props.history.push('/app/training/StartTraining?token='+token+'&memberid='+memberid+'&kata='+kata+'&camera='+cameraTake+'&width='+size.width+'&height='+size.height+'&isLandscape='+isLandscape+'&ratio='+ratio)
            }}>Mulai Latihan</Button>
        </AppBar>
    </Container>
  )
}
