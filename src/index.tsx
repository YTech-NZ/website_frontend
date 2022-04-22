import ReactDOM from 'react-dom';
import './styles/globals.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import Events from './screens/Events';
import SignIn from './components/Authentication/SignIn';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="events" element={<Events />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
