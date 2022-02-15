import ReactDOM from 'react-dom';
import './styles/globals.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screens/landing';
import Events from './screens/events';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="events" element={<Events />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
