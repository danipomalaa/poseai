import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Traing(props) {

  useEffect(() => {
  }, [])

  return (
    <Container maxWidth="sm" style={{paddingTop:5}}>
      {
          [1,2].map(item=>{
            return(
              <Card sx={{mt:1,mb:1}} onClick={()=>props.history.push('/app/training/addtraining')}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={"Kata "+item}
                  subheader="8 rangkaian gerakan dasar"
                />
                {/* <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    20 Dataset
                  </Typography>
                </CardContent> */}
              </Card>
            )
          })
        }
    </Container>
  )
}
