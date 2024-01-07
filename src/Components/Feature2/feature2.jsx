import React from 'react'
import { Box, Typography, Button } from '@mui/material';

const Feature2 = () => {
  return (
    <div className='continer'>
        <div className='row'>
        <p className='title'>
                              Elevating Card Programs With <span> Cutting- Edge Technology</span>
                            </p>
                            <p className='para-text'>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uteim 
                                ad minim veniam, quis nostrud
                            </p>
                        
                           <button className="buttons-instance" >Compare all pro features ➡️</button>

        </div>
        <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        padding: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Spending 9349 visa card
      </Typography>
      <Typography variant="body1" gutterBottom>
        127.14 USD vs last week
      </Typography>
      <Typography variant="body1" gutterBottom>
        400 USD
      </Typography>
      <Typography variant="body1" gutterBottom>
        Last Purchased (Feb 24 19:59 UTC-5)
      </Typography>
      <Typography variant="body1" gutterBottom>
        1000 USD
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button variant="contained" color="primary">
          X 5000 USD
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default Feature2