import { Routes, Route } from 'react-router-dom';
import google_play_icon from "./assets/google-play-badge.png"
import apple_store_icon from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
function App() {
  return (
    <>
      <>
        <header style={{ padding: 5, position: 'sticky', top: 0, backgroundColor: 'white', borderBottom: "solid 2px", borderBottomColor: "#EEEEEE" }}>
          <h1 style={{ fontFamily: 'Pacifico', margin: 0, fontSize: 35, marginLeft: "20px", lineHeight: 1, position: "absolute", left: "0", top: "15px" }}>PAFE</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "10%" }}>
            <p>使い方</p>
            <p>利用規約</p>
            <p>プライバシーポリシー</p>
            <p>お問い合わせ</p>
          </div>
        </header>
        <img src={google_play_icon} style={{ width: 120 }}></img>
        <img src={apple_store_icon}></img>
      </>
      <Routes>
        <Route path="/" element={<h1>landing</h1>} />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/term" element={<p>term</p>} />
        <Route path="/privacy-policy" element={<p>privacy-policy</p>} />
        <Route path="*" element={<></>} /> {/* not found */}
      </Routes>
    </>
  );
}

export default App;
