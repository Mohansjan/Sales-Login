import React from "react";
import "./banner.css";
import Banner from "../ImageSection/banner.webp";

const BannerSection = () => {
  return (
    <div className="BannerWrapper">
      <div className="bannerRow row">
        <div className="col-12">
          <div className="BannerRooter">
            <div className="bannerImager">
              <img className="banner-imager" src={Banner} alt="Banner" />
            </div>
            <div className="BannerCaption">
              <div className="bannerTitle">
                I always say shopping is cheaper than a psychiatrist.
              </div>
              <div className="bannerDesc">Tammy Faye Bakker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
