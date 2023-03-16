import { useState } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import {
    Container, Box, Paper, Typography, Divider, Button, Stack, Grid, TextField, FormHelperText
} from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EmailIcon from '@mui/icons-material/Email';


export function Contact({ snackbarAlert }) {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        validationSchema: yup.object().shape({
            name: yup.string().required('required').min(6, 'too short').max(20, 'too big'),
            email: yup.string().required('required')
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "invalid email address"),
            message: yup.string().required('required').min(20, 'too short').max(500, 'too big'),
        }),

        onSubmit: (value) => {

            setLoading(true);
            let payload = { info: Date.now(), ...value }

            fetch('https://auth-pass-reset0.onrender.com/portfolio/email', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json())
                .then(res => {
                    formik.resetForm();
                    setLoading(false);
                    if (res.status === 200) {
                        snackbarAlert(res.msg, 'success');
                    } else {
                        snackbarAlert(res.msg, 'error');
                    }
                })
                .catch(err => console.log(err))
        }

    })

    return (
        <>
            {/* contact */}
            <Box id='Contact' sx={{ maxHeight: { md: '864px' } }}>
                <Container maxWidth={'xl'} sx={{ p: { xs: 3, md: 10 } }} >

                    <Paper sx={{ p: { xs: 3, md: 4 } }}>

                        {/* content title */}
                        <Typography id='contact' variant="h4" align="center">Contact Me</Typography>

                        <Grid container sx={{ pt: { md: 3 } }}>

                            {/* contact details */}
                            <Grid item xs={12} md={5} lg={4}>

                                <Stack justifyContent='end' pl={9} sx={{ pb: { xs: 4 } }} >
                                    <Box>
                                        <PhonelinkRingIcon id='icon' fontSize="large" color="secondary" />
                                        <Typography className="timesNew" variant="h6">Mobile Number</Typography>
                                        <Typography className="timesNew" variant="body1">+91 9843882919</Typography>
                                    </Box>
                                    <Box>
                                        <EmailIcon id='icon' fontSize="large" color="success" />
                                        <Typography className="timesNew" variant="h6">Email Address</Typography>
                                        <Typography className="timesNew" variant="body1">joshuaashvinth@gmail.com</Typography>
                                    </Box>
                                </Stack>

                            </Grid>

                            <Divider orientation="vertical" flexItem
                                sx={{ display: { xs: 'none', md: 'block' }, mr: "-1px" }} />

                            <Grid item xs={12} md={7} lg={8}>

                                <Divider sx={{ display: { xs: 'block', md: 'none' } }} />

                                <Container maxWidth={'sm'} sx={{ pt: { xs: 4 } }}>
                                    <Stack justifyContent='space-around' >
                                        <form onSubmit={formik.handleSubmit}>

                                            {/* name */}
                                            <Typography sx={{ pt: { xs: 0, md: 0 } }}>Name</Typography>
                                            <TextField
                                                fullWidth
                                                id="name"
                                                size="small"
                                                variant="outlined"
                                                placeholder="your name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.errors.name && formik.touched.name}
                                            />
                                            <FormHelperText sx={{ color: '#D32F2F', ml: 1 }}>
                                                {formik.errors.name && formik.touched.name ? formik.errors.name : ""}
                                            </FormHelperText>

                                            {/* email */}
                                            <Typography pt={2}>Email</Typography>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                size="small"
                                                variant="outlined"
                                                placeholder="your email-id"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.errors.email && formik.touched.email}
                                            />
                                            <FormHelperText sx={{ color: '#D32F2F', ml: 1 }}>
                                                {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
                                            </FormHelperText>

                                            {/* message */}
                                            <Typography pt={2}>Message</Typography>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                id="message"
                                                variant="outlined"
                                                placeholder="enter your message"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.errors.message && formik.touched.message}
                                            />
                                            <FormHelperText sx={{ color: '#D32F2F', ml: 1 }}>
                                                {formik.errors.message && formik.touched.message ? formik.errors.message : ""}
                                            </FormHelperText>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={loading}
                                                sx={{ mt: 2, maxWidth: '170px' }}
                                            >
                                                {loading && <CircularProgress color='inherit' size={18} sx={{ mr: 1 }} />}
                                                Send Message
                                            </Button>

                                        </form>
                                    </Stack>
                                </Container>

                            </Grid>

                        </Grid>
                    </Paper>

                </Container>
            </Box>
        </>
    )
}