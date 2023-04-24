import { Button, IconButton } from '@mui/material'
import React from 'react'
import { moon, sun } from '../assets/images'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function Theme() {
    function themechange() {
        document.body.classList.toggle('dark-theme')
    };

  return (
    <div>
      <Button variant='contained' className='theme-btn' onClick={themechange}>        
        <Brightness7Icon className='light-theme' /> 
        <Brightness4Icon className='dark-theme' />
      </Button>
    </div>
  )
}
