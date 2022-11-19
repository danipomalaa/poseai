import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import useQuery from '../../Utils/QueryParams';

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
    <Container maxWidth="sm">

        <FormControl sx={{ mb:1,width:'100%', mt:1}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Arah Kamera</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Video Latihan</MenuItem>
            </Select>
        </FormControl>
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


        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, p:1, backgroundColor:'white' }}>
            <Button variant="contained" color="secondary" style={{ width:'100%'}} onClick={()=>{
                props.history.push('/app/training/StartTraining?token='+token+'&memberid='+memberid+'&kata='+kata+'&camera='+cameraTake+'&width='+size.width+'&height='+size.height+'&isLandscape='+isLandscape+'&ratio='+ratio)
            }}>Mulai Latihan</Button>
        </AppBar>
    </Container>
  )
}
