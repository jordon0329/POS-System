import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

function Hello() {
  return (
    <div>
      <h1 className="font-bold text-6xl text-center">Hello</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
