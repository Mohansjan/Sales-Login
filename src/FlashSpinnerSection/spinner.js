import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../FlashSpinnerSection/spinner.css";

const SpinnerSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="spinnerWrapper">
      <div className="spinnerRow row">
        <div className="col-12">
          <Slider {...settings}>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle"> Black Friday Deals</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle"> Black Friday Deals</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle"> Black Friday Deals</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle"> Black Friday Deals</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle"> Black Friday Deals</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
            <div>
              <div className="spinnerRooter">
                <span className="spinnerTitle">25% offer</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default SpinnerSection;
