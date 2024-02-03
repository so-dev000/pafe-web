import { Routes, Route } from 'react-router-dom';
import google_play_icon from "./assets/google-play-badge.png"
import apple_store_icon from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
function App() {
  return (
    <>
      <>
        <header style={{ padding: 20 }}>
          <h1 style={{ fontFamily: 'Pacifico', margin: 0, fontSize: 50, marginLeft: "20px", lineHeight: 1 }}>PAFE</h1>
        </header>
        {/* <img src={google_play_icon} style={{ width: 120 }}></img> */}
        {/* <img src={apple_store_icon}></img> */}
      </>
      <Routes>
        <Route path="/" element={<p>landing</p>} />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/term" element={<p>term</p>} />
        <Route path="/privacy-policy" element={<p>privacy-policy</p>} />
        <Route path="*" element={<></>} /> {/* not found */}
      </Routes>
    </>
  );
}

export default App;
