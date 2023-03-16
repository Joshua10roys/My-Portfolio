import { Box, Typography, Button, Stack, styled } from "@mui/material"
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GitHubIcon from '@mui/icons-material/GitHub';


// custom button
const Button_White = styled(Button)(({ theme }) => ({

    padding: '8px 20px',
    margin: '0px 10px',
    height: '35px',
    width: '120px',
    border: '1px solid',
    borderColor: 'white',
    borderRadius: '30px',
    textTransform: "capitalize",
    fontSize: '15px',
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
        boxShadow: '0 0 0 3px white',
        backgroundColor: 'rgba(250,250,250,0.7)',
    },
    '&:active': {
        backgroundColor: 'rgba(250,250,250)',
    },

    [theme.breakpoints.up('md')]: {
        fontSize: '18px',
        width: '170px',
        height: '50px'
    }
}));


// text responsive theme
let theme = createTheme();
theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3.5rem',
    },
};


export function Home() {

    return (
        <>
            <Box id='Home' sx={{ height: '100vh', maxHeight: { md: '864px' } }}>
                <Stack direction="column" justifyContent="center" alignItems="center" height='100%' spacing={3}>

                    <ThemeProvider theme={theme}>

                        <Typography className="homeText" variant="h3">Hello... !</Typography>
                        <Typography className="homeText" variant="h3">I am Joshua Ashvinth Roys,</Typography>
                        <Typography className="homeText" variant="h3">Full Stack Web Developer</Typography>

                        <Box>

                            <Button_White>
                                <PictureAsPdfIcon sx={{ pr: 1, fontSize: 24 }} />
                                <a target='_blank' style={{ textDecoration: 'none', color: 'white' }}
                                    href='https://drive.google.com/file/d/11Hj4bpzNjO3NFAFbrPU5Xmt_B6e4Hj8G/view?usp=sharing'
                                >Resume</a>
                            </Button_White>

                            <Button_White>
                                <GitHubIcon sx={{ pr: 1, fontSize: 24 }} />
                                <a target='_blank' style={{ textDecoration: 'none', color: 'white' }}
                                    href='https://github.com/Joshua10roys'
                                > Github </a>
                            </Button_White>

                        </Box>

                    </ThemeProvider>

                </Stack>
            </Box>
        </>
    )
}