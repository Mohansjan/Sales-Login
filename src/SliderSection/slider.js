import "../SliderSection/slider.css";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
import Slider5 from "../ImageSection/Slider_5.webp";
import Slider6 from "../ImageSection/Slider_6.webp";

const SliderSection = () => {
  return (
    <div className="SliderWrapper">
      <div className="SliderSec row">
        <div className="col-12">
          <div className="topSliderRow row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                  <a href="/shop"><img className="silder-Image" src={Slider1} alt="Slider1" /></a>
                </div>
                <div className="sliderCaption">
                  <span className="sliderDesc">
                    Headphone wireless with Lightning Charging
                  </span>
                  <a href="/shop" className="sliderLink">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                <a href="/shop"><img className="silder-Image" src={Slider2} alt="Slider2"/></a>
                </div>
                <div className="sliderCaption">
                  <span className="sliderDesc">
                    Way to Connect with People from All Over World
                  </span>
                  <a href="/shop" className="sliderLink">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomSliderRow row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                <a href="/shop"><img className="silder-Image" src={Slider3} alt="Slider3"/></a>
                </div>
                <div className="sliderCaption2">
                  <span className="sliderDesc2">Headphone wireless</span>
                  <a href="/shop" className="sliderLink">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                <a href="/shop"><img className="silder-Image" src={Slider4} alt="Slider4"/></a>
                </div>
                <div className="sliderCaption2">
                  <span className="sliderDesc2">
                    Way to Connect with People
                  </span>
                  <a href="/shop" className="sliderLink">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                <a href="/shop"><img className="silder-Image" src={Slider5} alt="Slider5"/></a>
                </div>
                {/* <div className="sliderCaption2">
                  <span className="sliderDesc2">
                    Way to Connect with People from All Over World
                  </span>
                  <a className="sliderLink">Shop Now</a>
                </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="SliderRooter">
                <div className="slider-imager">
                <a href="/shop"><img className="silder-Image" src={Slider6} alt="Slider6"/></a>
                </div>
                <div className="sliderCaption2">
                  <span className="sliderDesc2">
                    Way to Connect with People
                  </span>
                  <a href="/shop" className="sliderLink">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderSection;
