import "../BumberSection/bumber.css";
import Slider from "react-slick";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
//import Slider5 from "../ImageSection/Slider_5.webp";
//import Slider6 from "../ImageSection/Slider_6.webp";

const BumberSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="BumberWrapper">
      <div className="bumberRow row">
        <div className="col-12">
          <Slider {...settings}>
            <div>
              <div className="bumberRooter">
                <div className="bumberImager">
                 <a href="/shop"> <img className="bumpImg" src={Slider1} alt="Slider1"/></a>
                </div>
                <div className="bumberCaption">
                  <div className="bumberTitle">Mobile collection</div>
                  <div className="bumberDesc">
                    Tiny but Mighty Way to Enjoy Music
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bumberRooter">
                <div className="bumberImager">
                 <a href="/shop"> <img className="bumpImg" src={Slider2} alt="Slider2"/></a>
                </div>
                <div className="bumberCaption">
                  <div className="bumberTitle">Mobile collection</div>
                  <div className="bumberDesc">
                    Tiny but Mighty Way to Enjoy Music
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bumberRooter">
                <div className="bumberImager">
                 <a href="/shop"> <img className="bumpImg" src={Slider3} alt="Slider3"/></a>
                </div>
                <div className="bumberCaption">
                  <div className="bumberTitle">Mobile collection</div>
                  <div className="bumberDesc">
                    Tiny but Mighty Way to Enjoy Music
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bumberRooter">
                <div className="bumberImager">
                <a href="/shop"> <img className="bumpImg" src={Slider4} alt="Slider4"/></a>
                </div>
                <div className="bumberCaption">
                  <div className="bumberTitle">Mobile collection</div>
                  <div className="bumberDesc">
                    Tiny but Mighty Way to Enjoy Music
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default BumberSection;
