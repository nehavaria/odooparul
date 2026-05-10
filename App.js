import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import CreateTrip from './screens/CreateTrip';
import BuildItinerary from './screens/BuildItinerary';
import TripListing from './screens/TripListing';
import Profile from './screens/Profile';
import SearchPage from './screens/SearchPage';
import ItineraryView from './screens/ItineraryView';
import Community from './screens/Community';
import PackingChecklist from './screens/PackingChecklist';
import AdminPanel from './screens/AdminPanel';
import TripNotes from './screens/TripNotes';
import ExpenseInvoice from './screens/ExpenseInvoice';
import Settings from './screens/Settings';
import { ThemeProvider } from './context/ThemeContext';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('tl_user');
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/create-trip" element={<PrivateRoute><CreateTrip /></PrivateRoute>} />
          <Route path="/build-itinerary/:id" element={<PrivateRoute><BuildItinerary /></PrivateRoute>} />
          <Route path="/trips" element={<PrivateRoute><TripListing /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
          <Route path="/itinerary/:id" element={<PrivateRoute><ItineraryView /></PrivateRoute>} />
          <Route path="/community" element={<PrivateRoute><Community /></PrivateRoute>} />
          <Route path="/checklist" element={<PrivateRoute><PackingChecklist /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
          <Route path="/notes/:id" element={<PrivateRoute><TripNotes /></PrivateRoute>} />
          <Route path="/invoice/:id" element={<PrivateRoute><ExpenseInvoice /></PrivateRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
