import "./styles/App.css";
import { useState } from "react";

import UmbrellaMenu from "./components/UmbrellaMenu";
import UmbrellaPreview from "./components/UmbrellaPreview";
import blue from "./assets/img/Blue umbrella.png";
import yellow from "./assets/img/Yello umbrella.png";
import pink from "./assets/img/Pink umbrella.png";
function App() {
  const [preview, setPreview] = useState(blue);
  const [isLogoUploaded, setLogo] = useState(false);
  return (
    <div className="app">
      <UmbrellaPreview img={preview} isLogoUploaded={isLogoUploaded} />
      <UmbrellaMenu
        setPreview={setPreview}
        preview={preview}
        blue={blue}
        pink={pink}
        yellow={yellow}
        setLogo={setLogo}
      />
    </div>
  );
}

export default App;
