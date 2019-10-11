import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div>
            <Route exact path={'/'} render={(routerProps) =>
                <div className="App">
                    Hello There
                </div>
            }/>
        </div>
  );
}

export default App;
