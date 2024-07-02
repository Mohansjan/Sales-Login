import "../AllProSection/allPro.css";
import Special from "../ImageSection/banner.webp";
import Slider from "react-slick";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
import Slider5 from "../ImageSection/Slider_5.webp";
import Slider6 from "../ImageSection/Slider_6.webp";
import Slider7 from "../ImageSection/Slider_7.webp";
import { useState } from "react";
import { BsEye } from "react-icons/bs";

const AllProSection = () => {
  const [section, setSection] = useState("section 1");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSection = (section) => {
    setSection(section);
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2, // Number of rows
    slidesPerRow: 3, // Number of slides per row
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2, // Number of rows
          slidesPerRow: 3, // Number of slides per row
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2, // Number of rows
          slidesPerRow: 1, // Number of slides per row
        },
      },
    ],
  };
  return (
    <div className="AllProWrapper">
      <div className="allProWrapperSec row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="specialProRooter">
            <div className="sp-Wrapper">
              <img className="Sp-Imager" src={Special} alt="special" />
            </div>
            <span className="special-title">Timeless Style</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="topAlPro-sec">
            <span className="TitleSec">All Products</span>
          </div>
          <div className="bottom-topSellRow2 row">
            <div className="col-12">
              <Slider {...settings}>
                {[
                  Slider5,
                  Slider2,
                  Slider3,
                  Slider6,
                  Slider4,
                  Slider1,
                  Slider7,
                  Slider3,
                ].map((image, index) => (
                  <div key={index}>
                    <div
                      className="productRooter"
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="productImager2">
                        <img
                          className="proImager"
                          src={
                            index === hoveredIndex
                              ? index === 0
                                ? Slider2
                                : index === 1
                                ? Slider1
                                : index === 2
                                ? Slider4
                                : index === 3
                                ? Slider3
                                : index === 4
                                ? Slider5
                                : Slider6
                              : index === 0
                              ? Slider3
                              : index === 1
                              ? Slider1
                              : index === 2
                              ? Slider2
                              : index === 3
                              ? Slider4
                              : index === 4
                              ? Slider5
                              : Slider7
                          } alt="Slider1"
                        />
                        <div className="eyeSymbol">
                          <BsEye className="SvgEye" />
                        </div>
                      </div>
                      <div className="productDetail">
                        <a className="proName">Speakers Bass Tube</a>
                        <a className="proPrice">Rs. 106,000.00</a>
                        <div className="varGrp">
                          <span className="varColor1"></span>
                          <span className="varColor2"></span>
                          <span className="varColor3"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProSection;
