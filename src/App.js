
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
// import { AppBar,Tabs,Tab,TabPanel } from '@material-ui/core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';



function App() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <b>
          KIDS PLAY
        </b>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" component={Link} to="/home" />
            <Tab label="About" component={Link} to="/about"/>
            <Tab label="Contact" component={Link} to="/contact" />
          </Tabs>
        </AppBar>
      </header>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        {/* <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route> */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


// export default App;