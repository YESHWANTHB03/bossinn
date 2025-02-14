import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import RoomMatrix from './pages/RoomMatrix';
import BookedRooms from './pages/BookedRooms';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import PaymentLogs from './pages/PaymentLogs';
import CheckIn from './pages/CheckIn';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rooms" element={<RoomMatrix />} />
            <Route path="/booked-rooms" element={<BookedRooms />} />
            <Route path="/check-in/:roomId?" element={<CheckIn />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payments" element={<PaymentLogs />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;