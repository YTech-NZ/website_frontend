import ReactDOM from 'react-dom';
import './styles/globals.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './screens/Landing';
import Events from './screens/Events';
import Admin from './components/Authentication/Admin';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="events" element={<Events />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
