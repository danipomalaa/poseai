import { FormControl,Container,TextField, InputLabel, Typography, 
    Button, IconButton, Select, MenuItem, ButtonGroup, Grid, AppBar } from '@mui/material'
import React from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export default function AddDataset(props) {
  return (
    <Container maxWidth="sm">
        <FormControl sx={{ mt:1,mb:1,width:'100%'}} variant="outlined">
            <TextField
                style={{flex:1}}
                id="outlined-required"
                label="File Upload"
            />
        </FormControl>
        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Select value="0">
                <MenuItem value="0">Pilih Arah Kamera</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ mb:1,width:'100%'}} variant="outlined">
            <Typography>Pilih Gerakan Dasar</Typography>
            {
                [{analysis:true},{analysis:false},{analysis:false},{analysis:false}].map(item=>{
                    return(
                        <>
                            {item.analysis ? 
                            <div style={{border:"1px solid #CFCFCF", flex:1, padding:10, borderRadius:5}}>
                            <ButtonGroup variant="contained" style={{width:'100%'}}>
                                <Button style={{fontSize:8, width:'100%'}}>Screenshoot</Button>
                                <Button style={{fontSize:8, width:'100%'}}>Skeleton</Button>
                                <Button style={{fontSize:8, width:'100%'}}>Reset</Button>
                            </ButtonGroup>
                            <Typography>Gedan Barai</Typography>
                            <small>Video Analisis</small>
                            {
                                [1,2,3].map(item=>{
                                    return(
                                        <Grid container sx={{mb:1}}>
                                            <Grid item xs="4">
                                                <img src="https://static.turbosquid.com/Preview/001212/881/QI/600.jpg" style={{width:'100%'}} />
                                            </Grid>
                                            <Grid item xs="8">
                                                <table style={{width:'100%'}}>
                                                    <tr>
                                                        <td colSpan={3}>Upper Body</td>
                                                        <td colSpan={3}>Lower Body</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                        
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                        
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                        
                                                        <td>C1</td>
                                                        <td>:</td>
                                                        <td>10</td>
                                                    </tr>
                                                </table>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
                            
                            
                        </div>:
                        <div style={{border:"1px solid #CFCFCF", flex:1, justifyContent:'space-between', display:'flex', borderRadius:5}}>
                            <Typography sx={{mt:1,ml:1}}>Gedan Barai</Typography>
                            <IconButton>
                                <AddBoxRoundedIcon/>
                            </IconButton>
                        </div>
                        }
                        </>

                        
                    )
                })
            }
            
        </FormControl>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, p:1, backgroundColor:'white' }}>
            <div  style={{display:'flex', justifyItems:'center', justifyContent:'space-between'}}>
            <Button variant="contained" color="secondary" style={{ width:'49%'}} onClick={()=>props.history.push('/app/dataset')}>Batal</Button>
            <Button variant="contained" color="secondary" style={{ width:'49%'}} onClick={()=>props.history.push('/app/dataset')}>Simpan</Button>
            </div>
            
        </AppBar>
    </Container>
  )
}
