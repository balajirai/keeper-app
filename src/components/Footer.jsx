import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} balaji. All rights reserved</p>
    </footer>
  );
}

export default Footer;
