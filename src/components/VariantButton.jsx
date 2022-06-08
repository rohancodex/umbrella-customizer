const VariantButton = (props) => {
  function handleClick(e) {
    var style = getComputedStyle(document.body);
    //identify who clicked
    if (e.target.classList.contains("blue-btn")) {
      //change background color and upload btn color
      document.body.style.background = style.getPropertyValue("--light-blue");
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--blue");

      props.setimg(props.blue);
    }

    if (e.target.classList.contains("pink-btn")) {
      //change background color and upload btn color
      document.body.style.backgroundColor =
        style.getPropertyValue("--light-pink");
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--pink");
      props.setimg(props.pink);
    }

    if (e.target.classList.contains("yellow-btn")) {
      //change background color and upload btn color
      document.body.style.background = "lightyellow";
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--yellow");
      props.setimg(props.yellow);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={props.class}
      style={{ backgroundColor: props.bgcolor }}
    ></button>
  );
};

export default VariantButton;
