import React from "react";
import banner from "../../assets/banner-img-1.png";
const Banner = () => {
  return (
    <div
      className="hero max-h-screen md:min-h-[300px] rounded-2xl"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-11/12">
          <h1 className="mb-5 text-xl md:text-3xl min-w-full lg:text-5xl font-bold">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="mb-5 w-full  sm:text-lg text-sm">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
