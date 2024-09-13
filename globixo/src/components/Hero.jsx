import React from "react";
import desktop from "./desktop.png";
import mobile from "./mobile_view.png";

function Hero() {
  return (
    <div>
      {/* Desktop Image */}
      <img
        className="hidden md:block w-full h-auto"
        src={desktop}
        alt="desktop-view"
      />
      
      {/* Mobile Image */}
      <img
        className="block md:hidden w-full h-auto"
        src={mobile}
        alt="mobile-view"
      />
    </div>
  );
}

export default Hero;
