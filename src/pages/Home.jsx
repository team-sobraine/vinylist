import Random from "../components/Random";
import Search from "../components/Search";
import TextLogo from "../components/TextLogo";
import Navbar from "../components/Navbar";
import React from 'react';

function Home() {
  return (
    <div>
      <TextLogo />
      <Navbar />
      <Search />
      <Random />
    </div>
  );
}

export default Home;