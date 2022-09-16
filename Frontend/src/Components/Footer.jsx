import React from 'react'

const f_style = {
  color:"black",
  fontSize:"large",
  fontWeight:"bold",
  textAlign:"center",
  margin:"20px auto",
  textDecoration:"underline"

}

function Footer() {
  return (
      <a href="https://www.spraxa.com/" target="_blank" rel="noopener noreferrer">
    <div style={f_style}>
      Spraxa Solution Pvt. Ltd. &copy; 2022
    </div>
      </a>
  )
}

export default Footer;
