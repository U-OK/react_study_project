import React from "react";
import { Link } from "react-router-dom";

import { Grid, AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  linkButton: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#ffc841",
      transition: "all 0.25s ease",
    },
  },
  navigation: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid item className={classes.navigation}>
            <Link to="/">
              <Button className={classes.linkButton}>Главная страница</Button>
            </Link>

            <Link to="/owner/places">
              <Button className={classes.linkButton}>Страница заведений</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/">
              <Button className={classes.linkButton}>Войти</Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
