import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;