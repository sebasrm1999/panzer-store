import styles from "@/styles/header";
import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";

function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Box sx={styles.toolbarContainer}>
            <Grid item>
              <Image
                width={150}
                height={100}
                src="https://static.vecteezy.com/system/resources/previews/007/266/170/original/military-tank-silhouette-icon-panzer-vehicle-force-pictogram-tank-army-black-symbol-armed-machine-weapon-icon-army-transportation-logo-defense-war-ammunition-isolated-illustration-vector.jpg"
                alt="Logo"
              />
            </Grid>
            <Grid item>
              <Box sx={styles.pagesContainer}>
                {/*pages.map((page) => {
                      if (page === currentPage) {
                        return (
                          <Button
                          key={`a-${page}`}
                            sx={{
                              my: 2,
                              mx: 4,
                              color: 'gray',
                              display: 'block',
                              borderBottom: `4px solid ${selectedTheme.colors.primary}`,
                              paddingBottom: '3px',
                              fontFamily: selectedTheme.font,
                              boxShadow: 'none',
                              textTransform: 'none',
                              fontSize: "20px",
                              fontWeight: "bold"
                            }}
                          >
                            {page}
                          </Button>
                        );
                      } else {
                        return (
                          <Button
                            key={page}
                            className={'inactive'}
                            onClick={() => changeView(page)}
                            sx={{
                              my: 2,
                              mx: 4,
                              color: 'gray',
                              display: 'block',
                              fontFamily: selectedTheme.font,
                              boxShadow: 'none',
                              textTransform: 'none',
                              fontSize: "20px",
                              fontWeight: "bold"
                            }}
                          >
                            {page}
                          </Button>
                        );
                      }
                    })*/}
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <ShoppingCart />
              </Box>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </Box>
  );
}

export default Header;
