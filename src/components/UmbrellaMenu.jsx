import VariantButton from "./VariantButton";
import upload from "../assets/img/upload_icon.svg";
import { useState } from "react";

const UmbrellaMenu = (props) => {
  const [btntext, setText] = useState("UPLOAD LOGO");

  const fileHandler = (e) => {
    //validate file size
    if (e.target.files[0].size > 5242880) {
      alert("Upload a file smaller than 5MB");
    } else {
      const file = e.target.files[0];

      // get filename and update button text
      const filename = file.name;
      setText(filename);

      //read file
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        document.getElementById("logo-preview").src = event.target.result;
      });

      reader.readAsDataURL(file);
      props.setLogo(true);
    }
  };

  return (
    <section className="umbrella-menu">
      <h1 className="umbrella-menu-title">Custom Umbrella</h1>
      {/* variant toggler starts */}
      <div className="variant-btn-wrapper">
        <VariantButton
          bgcolor="#23afe2"
          class="variant-btn blue-btn"
          blue={props.blue}
          pink={props.pink}
          yellow={props.yellow}
          setimg={props.setPreview}
          setLogo={props.setLogo}
        />
        <VariantButton
          bgcolor="#d10d74"
          class="variant-btn pink-btn"
          blue={props.blue}
          pink={props.pink}
          yellow={props.yellow}
          setimg={props.setPreview}
          setLogo={props.setLogo}
        />
        <VariantButton
          bgcolor="#f8ce45"
          class="variant-btn yellow-btn"
          blue={props.blue}
          pink={props.pink}
          yellow={props.yellow}
          setimg={props.setPreview}
          setLogo={props.setLogo}
        />
      </div>
      {/* variant toggler starts */}

      <h2 style={{ marginBottom: "2px", marginTop: "30px" }}>
        Customize your Umbrella
      </h2>
      <p style={{ marginTop: "1px" }}>
        Upload a logo for an instant preview.
        <br /> .png and .jpg files only. Max file size is 5MB.
      </p>

      {/* Upload button starts */}
      <label htmlFor="logo">
        <div id="upload-btn">
          <img
            style={{ paddingRight: "10px" }}
            src={upload}
            alt="upload-logo"
          />
          <p className="upload-btn-text" style={{ width: "300px" }}>
            {btntext}
          </p>
          <input
            id="logo"
            name="logo"
            type="file"
            onChange={fileHandler}
            accept="image/png, image/jpeg"
          />
        </div>
      </label>
      {/* Upload button ends */}
    </section>
  );
};

export default UmbrellaMenu;
