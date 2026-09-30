import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import Success from './Pages/Success';
import MenuPage from './Pages/MenuPage';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App

