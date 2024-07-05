import React from "react";
import "./maps.css"

const MapSection=()=>{
    return (
        <div className="maps">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d156326.2094090925!2d80.22250177297047!3d12.974407574103864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720090733749!5m2!1sen!2sin"
              width="600" height="450"
              style={{ border: '0' }} // Ensure border value is a string
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      );
      
};
export default MapSection;