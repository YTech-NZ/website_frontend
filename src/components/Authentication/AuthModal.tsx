import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Login from './Login';
import Signup from './Signup';
import { AppBar, Box, Tab, Tabs } from '@material-ui/core';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1),
    },
    google: {
        padding: 5,
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        gap: 5,
        fontSize: 20,
    }
  }),
);

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const googleProvider = new GoogleAuthProvider()

  const signInWithGoogle = () => {};
    signInWithPopup(auth, googleProvider)

  return (
    <div>
        <button 
            style={{
                width: 100,
                height: 40,
                padding: 5,
                backgroundColor: "#EEBC1D",
            }}
            onClick={handleOpen}
        >
            Admin Login
        </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
                position="static"
                style={{ backgroundColor: "transparent", color: "white" }}
            >
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="simple tabs example"
                >
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>
            </AppBar>

            {value===0 && <Login/>}
            {value===1 && <Signup/>}

            <Box className={classes.google}>
                <GoogleButton>
                    style={{ width: "100%", outline: "none" }}
                    onClick={signInWithGoogle}
                </GoogleButton>
            </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
