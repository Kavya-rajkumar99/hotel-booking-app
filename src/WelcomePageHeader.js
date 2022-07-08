import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export function WelcomePageHeader(){
    return(
        <>
        <AppBar
        position="static"
        // style={{ backgroundColor: "#996515", opacity: "1" }}
        style={{ backgroundColor: "#332f2c", opacity: 0.9 }}
      >
        <Toolbar>
          <Typography variant="h6">BookIt</Typography>
          <Button color="inherit" style={{ marginLeft: "auto" }}>
            Login
          </Button>
          <Button color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
      <Box
        className="banner"
        style={{
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box>
          Explore your destination with us and enjoy unforgettable experiences
          in the hotels of your dreams
        </Box>
      </Box>
        </>
    )
}