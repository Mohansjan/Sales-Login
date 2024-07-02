import "../CategorySection/category.css";
import Slider from "react-slick";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
import Slider5 from "../ImageSection/Slider_5.webp";
import Slider6 from "../ImageSection/Slider_6.webp";

const CategorySection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="categoryWrapper">
      <div className="categoryRow row">
        <div className="col-12">
          <Slider {...settings}>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider1} />
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider2} alt="Slider2"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider3} alt="Slider3"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider4} alt="Slider4"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider5} alt="Slider5"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider6} alt="Slider6"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider3} alt="Slider3"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider2} alt="Slider2"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div>
              <div className="categoryRooter">
                <div className="categoryImager">
                  <img className="category-Img" src={Slider3} alt="Slider3"/>
                </div>
                <span className="categoryCaption">Mobiles</span>
              </div>
            </div>
            <div></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
