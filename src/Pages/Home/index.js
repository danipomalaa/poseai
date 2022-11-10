import React, { useState, useEffect, useRef } from 'react'
import { Typography, Button, IconButton,Container, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { dataRouters } from "./../../Routes/Data";

export default function Home(props) {

  useEffect(() => {
  }, [])

  return (
    <Container maxWidth="sm">
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {
          dataRouters.filter(x=>x.main === true).map(itemMenu=>{
            return(
              <>
                <ListItemButton onClick={()=> props.history.push(itemMenu.path)}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary={itemMenu.name} />
                </ListItemButton>
                <Divider />
              </>
            )
          })
        }
      </List>
    </Container>
  )
}
