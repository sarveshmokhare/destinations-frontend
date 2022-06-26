import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <p>Destinations © {currentYear}</p>
      <p>Made with ❤️ by Sarvesh!</p>

      <div className="social-media-icons-container">
        <a href="https://linkedin.com/in/sarvesh-mokhare" style={{color: "#ff5c8d"}} target="_blank">
          <LinkedInIcon
            fontSize="large"
            sx={{ "&:hover": { color: "#fb1a5e" } }}
          />
        </a>
        <a href="mailto:sarveshnbm@gmail.com" style={{color: "#ff5c8d"}}>
          <EmailIcon
            fontSize="large"
            sx={{ "&:hover": { color: "#fb1a5e" } }}
          />
        </a>
        <a href="https://instagram.com/sarveshmokhare" style={{color: "#ff5c8d"}} target="_blank">
          <InstagramIcon
            fontSize="large"
            sx={{ "&:hover": { color: "#fb1a5e" } }}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
