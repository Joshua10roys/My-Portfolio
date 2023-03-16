import "./style/style.css"
import { useState, useEffect, forwardRef } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";
import { Snackbar, } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { Appbar } from "./sections/appbar.js";
import { Home } from "./sections/home.js";
import { About } from "./sections/about.js";
import { Skills } from "./sections/skills.js";
import { Projects } from "./sections/projects.js";
import { Contact } from "./sections/contact.js";
import { Footer } from "./sections/footer.js";


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function App() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const snackbarAlert = (message, severity) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  useEffect(() => {
    if (window.location.href.includes('#')) {
      window.location.replace('http://localhost:3000/')
    }
  }, [])

  return (
    <>

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>

      <Routes>
        <Route path="/" element={<Pages snackbarAlert={snackbarAlert} />} />
        <Route path='*' element={<Navigate replace to={'/'} />} />
      </Routes>

    </>
  )
}


function Pages({ snackbarAlert }) {

  return (
    <>

      {/* app bar */}
      <Appbar />

      {/* home */}
      <Home />

      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* projects */}
      <Projects />

      {/* contact */}
      <Contact snackbarAlert={snackbarAlert} />

      {/* footer */}
      <Footer />

    </>
  );
}