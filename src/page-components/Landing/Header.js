import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  Button,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#3cbb25",
  },
  container: {
    textAlign: "center",
    marginTop: "-10%",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
    marginBottom: "1rem",
  },
  para: {
    fontSize: "2rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Desk.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
        style={{ marginTop: "30%" }}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to My<span className={classes.colorText}>Desk.</span>
          </h1>
          <p className={classes.para}>Your Virtual Space.</p>
          <Link to="/login">
            <Button
              variant="contained"
              color="black"
              size="medium"
              style={{
                marginTop: "1rem",
                fontSize: "2rem",
                borderRadius: "2%",
                backgroundColor: "#3cbb25",
              }}
            >
              Enter Your Desk
            </Button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
