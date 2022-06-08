const VariantButton = (props) => {
  function handleClick(e) {
    var style = getComputedStyle(document.body);
    //identify who clicked
    if (e.target.classList.contains("blue-btn")) {
      props.setimg(props.blue);
      //change background color and upload btn color
      document.body.style.background = style.getPropertyValue("--light-blue");
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--blue");
    }

    if (e.target.classList.contains("pink-btn")) {
      props.setimg(props.pink);
      //change background color and upload btn color
      document.body.style.backgroundColor =
        style.getPropertyValue("--light-pink");
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--pink");
    }

    if (e.target.classList.contains("yellow-btn")) {
      props.setimg(props.yellow);
      //change background color and upload btn color
      document.body.style.background = "lightyellow";
      document.getElementById("upload-btn").style.backgroundColor =
        style.getPropertyValue("--yellow");
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
