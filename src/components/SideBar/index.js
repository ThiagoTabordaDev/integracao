import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { MdChevronRight, MdChevronLeft, MdExitToApp } from 'react-icons/md';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import { List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { signOut } from '../../store/modules/auth/actions';
import { useStyles } from './styles';

import Access from '../Access';
import menu from '../Menu';

const SideBar = (props) => {
  const dispatch = useDispatch();
  const { idPerfil } = useSelector((state) => state.user.profile);
  const { open, handleDrawerClose } = props;
  const classes = useStyles();
  const theme = useTheme();
  const handleSingOut = () => dispatch(signOut());

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <MdChevronLeft /> : <MdChevronRight />}
        </IconButton>
      </div>
      <Divider />
      {menu.map((t) => (
        <Access
          key={t.title}
          title={t.title}
          subTitle={t.subTitle}
          icon={t.icon}
          component={RouterLink}
          controler={handleDrawerClose}
        />
      ))}

      <List>
        <ListItem button onClick={handleSingOut}>
          <ListItemIcon>
            <MdExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
