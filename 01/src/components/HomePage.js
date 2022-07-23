import About from "./ComponentsHomePage/About";
import Banner from "./ComponentsHomePage/Banner";
import Contact from "./ComponentsHomePage/Contact";
import Menu from "./ComponentsHomePage/Menu";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <Menu />
      <Contact />
    </>
  );
}
