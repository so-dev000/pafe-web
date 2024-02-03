import { Routes, Route } from 'react-router-dom';
import google_play_icon from "./assets/google-play-badge.png"
import apple_store_icon from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </head>
      <img src={apple_store_icon}></img>
      <><img src={google_play_icon} style={{ width: 120 }}></img>
        <h1 style={{ fontFamily: 'Pacifico' }}>PAFE</h1>
      </>
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
