import "./style/style.css"
import { SITE_URL } from "./assets/links/url.js";
import { useState, useEffect, forwardRef } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";
import { Appbar } from "./sections/appbar.js";
import { Home } from "./sections/home.js";
import { About } from "./sections/about.js";
import { Skills } from "./sections/skills.js";
import { Projects } from "./sections/projects.js";
import { Contact } from "./sections/contact.js";
import { Footer } from "./sections/footer.js";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function App() {

  // for snackbar
  // starts here
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
  // ends here

  // replace to home url on site reload
  useEffect(() => {
    if (window.location.href.includes('#')) {
      window.location.replace(SITE_URL)
    }
  }, [])

  return (
    <>
      {/* alert snackbar */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      {/* routes */}
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