import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Dataset(props) {

  useEffect(() => {
  }, [])

  return (
    <Container maxWidth="sm">
      <Button onClick={()=>props.history.push('/app/dataset/addkata')} sx={{p:2, mt:1}} style={{backgroundColor:"#CFCFCF", width:'100%', justifyContent:'space-between'}}>
        <Typography style={{color:'black', textAlign:'left'}}>Tambah Kata</Typography>
        <AddIcon style={{color:'black'}}/>
      </Button>
      
      {
          [1,2,3,4].map(item=>{
            return(
              <Card sx={{mt:1,mb:1}} onClick={()=>props.history.push('/app/dataset/adddataset')}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }
    </Container>
  )
}
