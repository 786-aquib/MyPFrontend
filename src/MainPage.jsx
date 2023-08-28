import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const imageURL  = "https://www.logodesignteam.com/blog/wp-content/uploads/2014/04/Increase-the-Sales-Revenue-Go-for-Website-Add-Ons.jpg";
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item style={{height : "1200px"}}>
            <div  style={{position: "absolute",
    height:"1200px",
    width:"900px",
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
            }}>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{height : "1200px"}}>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
  );
}