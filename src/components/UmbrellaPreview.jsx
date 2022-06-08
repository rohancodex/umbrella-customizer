const logo = "";

const UmbrellaPreview = (props) => {
  return (
    // Preview image starts
    <section className="umbrella-img" style={{ position: "relative" }}>
      <img
        id="preview-img"
        src={props.img}
        alt="umbrella preview"
        height="400px"
        style={{ position: "relative" }}
      />
      {/* uploaded logo  */}
      {props.isLogoUploaded && (
        <img
          id="logo-preview"
          src={logo}
          alt="logo-preview"
          style={{
            position: "absolute",
            top: "280px",
            height: "80px",
            maxWidth: "120px",
            objectFit: "contain",
          }}
        />
      )}
    </section>
    //preview image ends
  );
};

export default UmbrellaPreview;
