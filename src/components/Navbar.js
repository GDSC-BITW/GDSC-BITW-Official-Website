import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import {NavLink, Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Events",
    href: "/events",
  }
];

const useStyles = makeStyles(() => ({
  header: {
    boxShadow:'none',
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  active: {
    color: 'red',
    borderBottom: '3px solid #4285F4'
  },
  logo: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    textDecoration:'none',
    color:'black',
    fontFamily: "Poppins",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, active } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <img src="/images/logo.png" style={{height:"70px"}} alt="" />
        <div>{menus()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{menusMobile()}</div>
          </Drawer>

          <img src="/images/logo.png" style={{height:"70px"}} alt="" />
          <IconButton
            {...{
              edge: "start",
              color: "transparent",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Femmecubator
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const menus = () => {
    return headersData.map(({ label, href }) => {
      return (
        <NavLink activeClassName={active} className= {menuButton}  {...{
          key: label,
          color: "inherit",
          to: href

        }}>{label}</NavLink>
      )
    })
  }

  const menusMobile = () => {
    return headersData.map(({ label, href }) => {
      return (
        <NavLink activeClassName={active} className= {menuButton} style={{display:'flex', flexDirection:'column', margin:'20px'}}  {...{
          key: label,
          color: "inherit",
          to: href

        }}>{label}</NavLink>
      )
    })
  }

  return (
    <header>
      <AppBar className={header} color="transparent">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
