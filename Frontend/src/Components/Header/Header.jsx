import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo_img from "../../Images/logo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="header">
          <Toolbar>
            <div>
              <a href="http://spraxa.com" target="_blank" rel="noopener noreferrer">
                <img src={Logo_img} alt="Logo" className="header_img" />
                </a>
            </div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 , color:"white", fontWeight:"bold"}}>
              Spraxa
            </Typography>
            <Button color="inherit">
            <Link className="header_btn">
              Home
            </Link>
            </Button>
            <Button color="inherit">
             <Link to="/" className="header_btn">
             Logout
             </Link> 
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

// export default Header;s
