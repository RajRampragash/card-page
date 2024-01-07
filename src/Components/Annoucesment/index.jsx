import React from 'react'
import Chip from '@mui/material/Chip';
import './style.css'

const Container = () => {
  return (
    <div className='container'> 
    <div className='content'>
    <Chip className = " lable" label="Announcemnet"/><h5>We are happy to announce that we riase $2 Million in Seed Funding</h5>
      </div> 
      </div>
  )
}

export default Container