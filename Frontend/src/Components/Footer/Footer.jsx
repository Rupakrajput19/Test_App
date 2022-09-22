import React from 'react';

const f_style = {
  color:"white",
  fontSize:"larger",
  display:"block",
  fontWeight:"bold",
  textAlign:"center",
  width:"300px",
  margin:"20px auto",
  textDecoration:"underline"
}

function Footer() {
  return (
      <a href="https://www.spraxa.com/" target="_blank" rel="noopener noreferrer" style={f_style}>
      Spraxa Solution Pvt. Ltd. &copy; 2022
      </a>
  )
}

export default Footer;
