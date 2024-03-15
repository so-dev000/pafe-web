import { Routes, Route } from "react-router-dom";
import { Term } from "./feature/term/term";
import { Header } from "./components/header";
import { Lp } from "./feature/lp/lp";
import { About } from "./feature/about/about";
import { PrivacyPolicy } from "./feature/privacyPolicy/privacyPolicy";
import { NotFound } from "./feature/notFound/notFound";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Lp></Lp>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/term" element={<Term></Term>} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
