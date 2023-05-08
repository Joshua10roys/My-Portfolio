import { Container, Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material"


export function Projects() {

    return (
        <Box id='Projects' sx={{ height: { lg: '100vh' }, maxHeight: { lg: '864px' } }}>
            <Container maxWidth={'xl'} sx={{ height: '100%', p: { xs: 3, md: 10 }, py: { xs: 6 } }}>

                {/* content title */}
                <Typography id='projects' variant="h4" align="center">Projects</Typography>

                {/* projects */}
                <Grid container direction='row' justifyContent="space-evenly" alignItems="center"
                    height="100%" columnSpacing={2} rowSpacing={4} sx={{ py: { xs: 3, md: 8 }, pb: { md: 0 } }}>

                    {/* projects 1 */}
                    <Grid item>
                        <Card id='card'>
                            <CardMedia id='cardImage' image={require('../assets/img/portfolio.jpg')} />
                            <CardContent id='description'>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dynamic Portfolio
                                </Typography>
                                <Typography variant="body1">
                                    Each section in the site can be made hidden or visible.
                                    Can add, remove and hide details in each sections.
                                </Typography>
                                <Box id='links'>
                                    <a target='_blank' href="https://github.com/Joshua10roys/project-dynamic-portfolio-frontend">
                                        View Source
                                    </a>
                                    <a target='_blank' href="https://chipper-sable-4cac24.netlify.app/">
                                        View Site
                                    </a>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* projects 2 */}
                    <Grid item>
                        <Card id='card'>
                            <CardMedia id='cardImage' image={require('../assets/img/crm_app.jpg')} />
                            <CardContent id='description'>
                                <Typography gutterBottom variant="h5" component="div">
                                    Simple CRM App
                                </Typography>
                                <Typography variant="body1">
                                    App has complete authentication system. It has different levels of users.
                                    Can create, update or delete leads and services based on user scope.
                                    Lead/service has various status from created to closed.
                                </Typography>
                                <Box id='links'>
                                    <a target='_blank' href="https://github.com/Joshua10roys/crm_app_frontend">
                                        View Source
                                    </a>
                                    <a target='_blank' href="https://delightful-chebakia-cc2aef.netlify.app/user/login">
                                        View Site
                                    </a>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* project 3 */}
                    <Grid item>
                        <Card id='card'>
                            <CardMedia id='cardImage' image={require('../assets/img/service_4_you.jpg')} />
                            <CardContent id='description'>
                                <Typography gutterBottom variant="h5" component="div">
                                    Service For You
                                </Typography>
                                <Typography variant="body1">
                                    In this site service provider can create an account and post this service.
                                    A client can find a service and schedule a booking according to service provider availability.
                                </Typography>
                                <Box id='links'>
                                    <a target='_blank' href="https://github.com/Joshua10roys/service_4_you_frontend/tree/master">
                                        View Source
                                    </a>
                                    <a target='_blank' href="https://gorgeous-wisp-58582a.netlify.app/home">
                                        View Site
                                    </a>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* projects 4 */}
                    {/* <Grid item>
                        <Card id='card'>
                            <CardMedia id='cardImage' image={require('../assets/img/authentication.jpg')} />
                            <CardContent id='description'>
                                <Typography gutterBottom variant="h5" component="div">
                                    Authentication System
                                </Typography>
                                <Typography variant="body1">
                                    Site shows complete authentication system.
                                    Like user creation, login, logout, password resetting through email and password resetting.
                                </Typography>
                                <Box id='links'>
                                    <a target='_blank' href="https://github.com/Joshua10roys/password-reset">
                                        View Source
                                    </a>
                                    <a target='_blank' href="https://remarkable-pie-2f428a.netlify.app/login">
                                        View Site
                                    </a>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid> */}

                </Grid>

            </Container>
        </Box>
    )
}