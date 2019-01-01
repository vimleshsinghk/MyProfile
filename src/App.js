import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Notfound from "./components/notFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">
            <NavBar />
            <header className="App-header">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
              </Switch>
            </header>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
