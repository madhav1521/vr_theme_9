import { Box, Menu, MenuItem, Button, MenuProps, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { brandicon, dropdownwhite, notification, profile, searchicon, toggleicon } from '../assets/images';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
}));

export default function Header() {

  const navigate = useNavigate();

  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  // for toggle sidebar ---------------------------------------------------------------------------------------------------------------
  function togglebtn() {
    document.body.classList.toggle('setStatus')
  };
  // for searchbar ---------------------------------------------------------------------------------------------------------------
  function searchbar() {
    document.body.classList.toggle('setSearch')
  };

  // for header ---------------------------------------------------------------------------------------------------------------

  const [header, setHeader] =  useState(false);
  const changeBackground = () => {
    if(window.scrollY>=80) {
      setHeader(true);
    }else {
      setHeader(false);
    }
  };
  window.addEventListener('scroll' ,changeBackground);

  return (
    <>
      <Box className='overlaysearch' onClick={searchbar}></Box>
      <Box className='overlay' onClick={togglebtn}></Box>
      <Box className={header ? 'header active' : 'header'}>
        {/*   search-bar 
        --------------------------------------------------------------------------------------------------------------------------- */}
        <Button variant='outlined' className='toggle-btn dropdown' onClick={togglebtn} title='toggle-sidebar'>
          <img src={toggleicon} alt="toggle-button" />
        </Button>
        <NavLink className='brand-icon' to='/dashboard' title='company-logo'>
          <img src={brandicon} alt="company-logo" />
        </NavLink>
        <Box className='search-box'>
          <input type='search' title='search' className="search-input" placeholder="Search" ></input>
          <Button onClick={searchbar} title='close-search' className="btn-close-search dropdown"><CloseRoundedIcon color="info" /></Button>
        </Box>
        {/*   notification 
        --------------------------------------------------------------------------------------------------------------------------- */}

        <Button className="search-btn dropdown" title='search-here' onClick={searchbar}>
          <img src={searchicon} alt="search-icon" />
        </Button>
        <Button id="demo-customized-button"
          aria-controls={open1 ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? 'true' : undefined}
          disableElevation
          onClick={handleClick1}
          variant='contained'
          className='dropdown notification-btn'
          title='notification-btn'
        >
          <img src={notification} alt="notification-button" />
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
          className="menu-list"
        >
          <MenuItem onClick={handleClose1} disableRipple>
            One unread message
          </MenuItem>
          <MenuItem onClick={handleClose1} disableRipple>
            Help
          </MenuItem>
        </StyledMenu>

        {/*   menu profile
        --------------------------------------------------------------------------------------------------------------------------- */}
        <Button
          id="demo-customized-button"
          aria-controls={open2 ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick2}
          className="dropdown menu"
          title='menu-btn'
        >
          <img alt="profile-image" src={profile} />
          <Box className="profile-name">
            <Typography variant='h6' >Anne Thurium</Typography>
            <Typography variant='body2' component='span' >Admin</Typography>
          </Box>
          <img alt="dropdown" src={dropdownwhite} className='dropdown-arrow'/>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          className="menu-list"
        >

          <MenuItem disableRipple onClick={handleClose2} >
            <Box onClick={handleClose2}>Dark theme</Box>
          </MenuItem>
          <MenuItem disableRipple onClick={handleClose2}>
            Action
          </MenuItem>

          <MenuItem onClick={() => { navigate('/'); }} disableRipple>
            Logout
          </MenuItem>
        </StyledMenu>
      </Box>
    </>
  )
}
