import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './City.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function City(props) {
  const { citys } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='city'>
      <div className='city-body'>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Pick the City that you want to see the weather
            </ListSubheader>
          }
          className='root'
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary='City' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {citys.map((city, index) => (
                <ListItem
                  button
                  className='nested'
                  key={city.id}
                  onClick={() => props.history.push(`/detail/${city.id}`)}
                >
                  <ListItemText primary={city.name} />
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}
