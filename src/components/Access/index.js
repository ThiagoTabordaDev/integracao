import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { useStyles } from './styles';
import Icon from '../Icon';

export default function Access({ title, subTitle, controler, icon }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon && (
          <ListItemIcon className={classes.icon}>
            <Icon key={title} symbol={icon} />
          </ListItemIcon>
        )}
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subTitle.map((t) => (
          <MenuItem
            key={t.subMenu}
            component={RouterLink}
            to={`/${t.route}`}
            onClick={() => {
              handleClose();
              controler();
            }}
          >
            {t.subMenu}
          </MenuItem>
        ))}
      </Menu>
      <Divider />
    </div>
  );
}
