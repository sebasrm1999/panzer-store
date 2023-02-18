import styles from "@/styles/header";
import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import ShoppingCart from "./ShoppingCart";

function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <div className="container">
            <Grid item>
              <Box
                className="logo"
                component="img"
                src="https://playeatlas.com/wp-content/themes/eatlas/assets/images/footer/logo-black-text.png"
              ></Box>
            </Grid>
            <Grid item>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
            <Grid>
              <Box>
                <ShoppingCart />
              </Box>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mt: "30px" }} />
    </Box>
  );
}

export default Header;
