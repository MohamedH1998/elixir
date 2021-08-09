import React from "react";
import "./RenderSmoothImage.css";

function RenderSmoothImage({ src, alt }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? "visible " : "hidden"}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </>
  );
}

export default RenderSmoothImage;
