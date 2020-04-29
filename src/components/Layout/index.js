import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { AppBar, MenuList, MenuItem } from "@material-ui/core/";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import TableChartTwoToneIcon from '@material-ui/icons/TableChartTwoTone';

// import styles from './Layout.module.css'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // makes the appbar above sidebar >
      // for above appbar comment out ,and uncomment two lines below,
      zIndex: theme.zIndex.drawer + 1,

      // width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  }
}));

function Layout(props) {
  const {
    container,
    children,
    location: { pathname },
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden xsDown>
        <div className={classes.toolbar} /> {/* keeps space for appbar*/}
      </Hidden>
      <Divider />

      <MenuList>
        {/* <MenuItem
          component={Link}
          to="/mui-dashboard"
          selected={"/mui-dashboard" === pathname}
        >
          Dashboard
        </MenuItem> */}

        <MenuItem
          component={Link}
          to="/map"
          selected={"/map" === pathname}
          
        >
         <PublicTwoToneIcon/>
         <Typography>Map</Typography>
         
        </MenuItem>

        <MenuItem
          component={Link}
          to="/charts"
          selected={"/charts" === pathname}
        ><PollTwoToneIcon/>
          <Typography>Charts</Typography> 
        </MenuItem>

        <MenuItem
          component={Link}
          to="/tables"
          selected={"/tables" === pathname}
        ><TableChartTwoToneIcon/>
          <Typography>Tables</Typography> 
        </MenuItem>



        {/* <MenuItem component={Link} to="/" selected={"/" === pathname}>Link</MenuItem>
        <MenuItem component={Link} to="/" selected={"/" === pathname}>Logout</MenuItem> */}





        <Divider />

        {/* <MenuItem
          component={Link}
          to="/mui-dashboard/writers"
          selected={"/mui-dashboard/writers" === pathname}
        >
          Writers
        </MenuItem>
        <Divider /> */}

      </MenuList>
    </div>
  );

  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
           <div style={{display:'flex'}}>
            {/* C<div className={styles.AppLogo}><i className="fas fa-virus"/></div>VID-19 Tracker */}
            </div>
          </Typography>
           
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
    </React.Fragment>
  );
}



export default compose(withRouter, withStyles(useStyles))(Layout);
