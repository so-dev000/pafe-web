import { Routes, Route } from 'react-router-dom';
import google_play_icon from "./assets/google-play-badge.png"
import apple_store_icon from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
function App() {
  return (
    <>
      <><img src={google_play_icon} style={{ width: 150 }}></img>
        <img src={apple_store_icon}></img></>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
        <Route path="/contact" element={<></>} />
        <Route path="/term" element={<></>} />
        <Route path="/privacy-policy" element={<></>} />
        <Route path="*" element={<></>} /> {/* not found */}
      </Routes>
    </>
  );
}

export default App;
