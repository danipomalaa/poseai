import React, { useState, useEffect, useRef, useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography, Button, IconButton,Container, Alert } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { MemberContext } from "./../../Context/index"
import useQuery from '../../Utils/QueryParams';

export default function Traing(props) {
  const { getDataMember, profileMember } = useContext(MemberContext)

  let query = useQuery();
  const memberid = query.get("memberid")
  const token = query.get("token")
  useEffect(() => {
    getDataMember(memberid)
  }, [])

  return (
    <Container maxWidth="sm" style={{paddingTop:10}}>
      <Typography variant="h6">Hi, {profileMember?.FirstName} {profileMember?.LastName}
      </Typography>
      <Alert severity="info" sx={{mt:1}}>Silahkan pilih salah satu jenis pelatihan mu dibawah ini</Alert>
      {
          [1,2].map(item=>{
            return(
              <Card sx={{mt:1,mb:1}} onClick={()=>props.history.push('/app/training/addtraining?memberid='+memberid+'&token='+token+'&kata='+item)}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={"Kata "+item}
                  subheader="... rangkaian gerakan dasar"
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
