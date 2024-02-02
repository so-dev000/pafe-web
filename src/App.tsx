import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h3>Welcome to Pafe</h3>
      <Routes>
        <Route path="/" element={< p />} />
        <Route path="/about" element={<p />} />
        <Route path="/contact" element={<p />} />
        <Route path="/term" element={<p />} />
        <Route path="/privacy-policy" element={<p />} />
        <Route path="*" element={<p />} /> {/* not found */}
      </Routes>
    </>
  );
}

export default App;
