import { Container, Box, Paper, Typography, Grid, Tooltip, Zoom } from "@mui/material"


// skills list
const skills = ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Material-Ui",
    "Node.js", "Express.js", "MongoDB", "Postman", "Git", "Github", "Visual Studio Code"]


export function Skills() {

    return (
        <Box id='Skills' sx={{ height: { xl: '864px' } }}>
            <Container maxWidth={'xl'} sx={{ height: '100%', p: { xs: 3, md: 10 }, py: { xs: 6 } }}>

                {/* content title */}
                <Typography id='skills' variant="h4" align="center">Skills & Tools</Typography>

                {/* skills icons */}
                <Grid container direction='row' justifyContent="space-evenly" alignItems="center"
                    height="100%" rowSpacing={4} columnSpacing={2} sx={{ py: { xs: 3, md: 8 }, pb: { md: 0 } }}>

                    {skills.map(item => (
                        <Grid item key={item}>
                            <Tooltip arrow title={item} placement='top' TransitionComponent={Zoom} >
                                <Paper id='skillPaper' elevation={8}>
                                    <img id='skillImage' src={require(`../assets/img/${item}.png`)} />
                                </Paper>
                            </Tooltip>
                        </Grid>
                    ))}

                </Grid>

            </Container>
        </Box>
    )
}