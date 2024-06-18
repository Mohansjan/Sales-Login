import "../AddsSection/adds.css";
import Add1 from "../ImageSection/Slider_2.webp";
import Add2 from "../ImageSection/add_2.webp";
import Add3 from "../ImageSection/add_3.webp";
import Add4 from "../ImageSection/add_4.webp";
import Add5 from "../ImageSection/add_5.webp";

const AddsSection = () => {
  return (
    <div className="AddsWrapper">
      <div className="AddsRooter row">
        <div className="col-12">
          <div className="ropAddsSec row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="AddRooter">
                <div className="addImager">
                  <img className="add-Img" src={Add1} alt="add" />
                </div>
                <div className="addCaptionSec">
                  <span className="addTitle">Smart Phone</span>
                  <span className="addDesc">Capture your reality</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="AddRooter">
                <div className="addImager">
                  <img className="add-Img" src={Add2} alt="add" />
                </div>
                <div className="addCaptionSec">
                  <span className="addTitle">Smart Phone</span>
                  <span className="addDesc">Capture your reality</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="AddRooter">
                <div className="addImager">
                  <img className="add-Img" src={Add3} alt="add" />
                </div>
                <div className="addCaptionSec">
                  <span className="addTitle">Smart Phone</span>
                  <span className="addDesc">Capture your reality</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ropAddsSec row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="AddRooter">
                <div className="addImager">
                  <img className="add-Img" src={Add4} alt="add" />
                </div>
                <div className="addCaptionSec">
                  <span className="addTitle">Smart Phone</span>
                  <span className="addDesc">Capture your reality</span>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
              <div className="AddRooter">
                <div className="addImager">
                  <img className="add-Img" src={Add5} alt="add" />
                </div>
                <div className="addCaptionSec">
                  <span className="addTitle">Smart Phone</span>
                  <span className="addDesc">Capture your reality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddsSection;
