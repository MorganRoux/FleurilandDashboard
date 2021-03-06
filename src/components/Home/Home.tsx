
import React, { useContext }from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import OrdersPage from '../Orders/Orders';
import useStylesHome from './Home.style';
import { Button } from '@material-ui/core';
import { firebase } from '../../helper/firebase';

const Home: React.FC = () => {
  const classes = useStylesHome();

  const handleLogout = () => {
    firebase.auth().signOut();
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Fleuriland
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap>
            Fleuriland
          </Typography>
        </Toolbar>
        <Divider />
        <div className={classes.drawerContainer}>
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon className={classes.icon}/> : <MailIcon className={classes.icon}/>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Drawer>
      <main className = {classes.content}>
      <Toolbar className = {classes.toolbar}>
        <div></div>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
          <OrdersPage/>
      </main>
    </div>
  )
}

export default Home;