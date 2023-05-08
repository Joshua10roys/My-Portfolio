import { Typography, Box } from "@mui/material"

export function Footer() {

    return (
        <Box id='footer' sx={{ m: 0, p: { xs: 2, md: 3 } }}>
            <Typography variant="body1" align="center">
                Made by <strong>Joshua Ashvinth Roys</strong>
            </Typography>
        </Box>
    )
}