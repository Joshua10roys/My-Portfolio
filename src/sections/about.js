import { Container, Box, Typography, Stack, Grid } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { aboutContent } from "../assets/texts/text.js";


// text responsive theme
let theme = createTheme();
theme.typography.body1 = {

    [theme.breakpoints.up('xs')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.8rem',
    },
};

export function About() {

    return (
        <Box id='About' sx={{ height: { lg: '100vh' }, maxHeight: { md: '864px' } }}>
            <Container maxWidth={'xl'} sx={{ height: '100%', p: { xs: 3, md: 10 }, py: { xs: 6 } }}>

                {/* content title */}
                <Typography id='aboutMe' variant="h4" align="center">About Me</Typography>

                <Grid container height='100%'>

                    {/* josh picture */}
                    <Grid item xs={12} md={4} height='100%' sx={{ p: { xs: 3, md: 5 } }}>
                        <Stack justifyContent="center" alignItems="center" height='100%'>
                            <img id='joshImage' alt="Joshua Picture" src={require('../assets/img/joshua.jpg')} />
                        </Stack>
                    </Grid>

                    {/* about content */}
                    <Grid item xs={12} md={8} height='100%' sx={{ p: { xs: 1, sm: 3, md: 5 } }}>
                        <Stack justifyContent="center" alignItems="center" height='100%'>
                            <ThemeProvider theme={theme}>
                                <Typography id='about-content' variant="body1">{aboutContent}</Typography>
                            </ThemeProvider>
                        </Stack>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}