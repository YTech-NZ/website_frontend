import ReactDOM from 'react-dom';
import './styles/globals.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import Events from './screens/Events';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<Landing />} />
      <Route path="/events" element={<Events />} />
      <Route path="/community" element={<Landing />} />
      <Route path="/joinus" element={<Landing />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
