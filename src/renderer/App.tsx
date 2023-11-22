import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import CustomerOrderPage from './pages/CustomerOrderPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/customerorder" element={<CustomerOrderPage />} />
      </Routes>
    </Router>
  );
}
