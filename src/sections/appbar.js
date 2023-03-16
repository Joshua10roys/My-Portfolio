import { useState } from "react";
import { Container, Box, Typography, Button, IconButton, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export function Appbar() {

    const pages = ["Home", "About", "Skills", "Projects", "Contact"];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "rgba(10,10,10,0.8)" }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* title */}
                    <Typography variant="h5" noWrap sx={{ fontWeight: 700, flexGrow: 1 }}>
                        Joshua Ashvinth Roys
                    </Typography>

                    {/* pages link on md */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                href={`#${page}`}
                                key={page}
                                sx={{
                                    mt: 2,
                                    mb: 1,
                                    color: 'white',
                                    fontWeight: 750,
                                    fontSize: 16,
                                    textTransform: "capitalize"
                                }} >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* pages link on xs */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                        {/* menu button */}
                        <IconButton
                            size="large"
                            aria-label="pages in this site"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* menu */}
                        <Menu
                            keepMounted
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Button
                                        href={`#${page}`}
                                        key={page}
                                        sx={{ py: 0, px: 2, fontSize: 15, color: 'darkblue', textTransform: "capitalize" }}
                                    >
                                        {page}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}