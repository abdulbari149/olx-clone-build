import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
function Banner() {
  const bannerStyles = {
    display: "inline-block",
    maxWidth: "100%",
    height: "250px",
    objectFit: "cover",
  };
  return (
    <Jumbotron fluid>
      <img style={bannerStyles} src="/images/hero_bg_pk.jpg" alt="" />
    </Jumbotron>
  );
}

export default Banner;
