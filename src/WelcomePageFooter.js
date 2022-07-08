import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
export function WelcomePageFooter(){
    return(
        <>
        <Box className="footer">
        <footer className="hotelsContainer">
          <div className="footerContent">
            <p>
              <IconButton color="primary">
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton color="secondary">
                <InstagramIcon color="secondary" />
              </IconButton>
              <IconButton color="primary">
                <TwitterIcon color="primary" />
              </IconButton>
              <IconButton color="primary">
                <LinkedInIcon color="primary" />
              </IconButton>
              <IconButton color="error">
                <MailIcon color="error" />
              </IconButton>
              <IconButton color="primary">
                <CallIcon color="primary" />
              </IconButton>
            </p>
          </div>
        </footer>
      </Box>
        </>
    )
}