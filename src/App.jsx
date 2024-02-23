
// import './App.css'
// import Heading from './components/Heading'

// function App() {


//   return (
//     <>
//     <Heading />
//     </>
//   )
// }

// export default App
import './App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Heading from './components/Heading'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Transactions from './components/Transactions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item  md={5} xs={12}>
          <Item>
          <Heading />
          </Item>
        </Grid>
        
        <Grid item  md={7} xs={12}>
          <Item>
            {/* placeholder text */}
          <h2>Login</h2>
          <Login />
          </Item>
        </Grid>
        
        <Grid item md={2} xs={12}>
          <Item>
          {/* placeholder text */}
          <h2>Side Bar</h2>
          <Sidebar />
          </Item>
        </Grid>
        
        <Grid item md={10} xs={12}>
          <Item>
            {/* placeholder text */}
          <h2>Members</h2>
          <Transactions />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;