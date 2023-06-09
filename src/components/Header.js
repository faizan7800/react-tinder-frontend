import React from 'react'
import '../styles/Header.css'
import IconButton from '@mui/material/IconButton';
import Person2Icon from "@mui/icons-material/Person2";
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person2Icon fontSize="large" className="header__icon" />
      </IconButton>
      <img className='header__logo' src="/images/tinder.png" alt="" />
      <IconButton>
      <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default Header