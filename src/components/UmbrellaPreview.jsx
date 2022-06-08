import { useState } from "react";
import loader from "../assets/img/loader_icon.svg";
const logo = "";

const UmbrellaPreview = (props) => {
  return (
    <section className="umbrella-img" style={{ position: "relative" }}>
      (
      <img
        id="preview-img"
        src={props.img}
        alt="umbrella preview"
        height="400px"
        style={{ position: "relative" }}
      />
      )
      {props.isLogoUploaded && (
        <img
          id="logo-preview"
          src={logo}
          alt="logo-preview"
          style={{
            position: "absolute",
            top: "300px",
            height: "auto",
            maxWidth: "120px",
            objectFit: "contain",
          }}
        />
      )}
    </section>
  );
};

export default UmbrellaPreview;
