import { Routes, Route } from "react-router-dom";
import { Term } from "./feature/term/term";
import { Header } from "./components/header";
import { Lp } from "./feature/lp/lp";
import { About } from "./feature/about/about";
import { PrivacyPolicy } from "./feature/privacyPolicy/privacyPolicy";
import { NotFound } from "./feature/notFound/notFound";
import { URLs } from "./constants/urls";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={URLs.Lp} element={<Lp></Lp>} />
        <Route path={URLs.About} element={<About></About>} />
        <Route path={URLs.Term} element={<Term></Term>} />
        <Route
          path={URLs.PrivacyPolicy}
          element={<PrivacyPolicy></PrivacyPolicy>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
