import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import AppointmentPage from './components/Appointment/Appointment/AppointmentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/appointment'>
          <AppointmentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
