import { IconButton, AppBar, Avatar, Toolbar } from '@material-ui/core/';

import { MdMenu } from 'react-icons/md';

import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.svg';
import { useStyles } from './styles';

const Header = (props) => {
  const { open, handleDrawerOpen } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MdMenu />
        </IconButton>
        <IconButton>
          <Link to="/">
            <img
              className={classes.img}
              src={logo}
              alt="Assistente Comercial"
            />
          </Link>
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          className={classes.avatarRight}
        >
          <Link to="/profile">
            <Avatar alt="Remy Sharp" variant="circle" src={avatar} />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
