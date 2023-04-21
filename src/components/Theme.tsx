import { Button } from '@mui/material'
import React from 'react'
import { moon, sun } from '../assets/images'

export default function Theme() {
    function themechange() {
        document.body.classList.toggle('dark-theme')
    };
  return (
    <div>
      <Button variant='contained' className='theme-btn'>
        <img src={sun} alt="theme" className='light-theme' onClick={themechange} />
        <img src={moon} alt="theme" className='dark-theme' onClick={themechange} />
      </Button>
    </div>
  )
}
