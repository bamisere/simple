import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";


class App extends Component {
    render() {
        return (
            <HashRouter>
            <div>
            
                <h1>Simple Portfolio </h1>
                <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Experience</NavLink></li>
                        <li><NavLink to="/contact">Education</NavLink></li>
                </ul>
                <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Experience} />
                        <Route path="/contact" component={Education} />

                </div>
            </div>
            </HashRouter>
        );
    }
}

export default App;