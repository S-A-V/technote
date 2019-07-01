import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Phone from './Phone'
import Pad from './Pad'

ReactDOM.render(
  <Router>
    <div>
      <h1>hello, edison</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Apple</Link>
          </li>
          <li>
            <Link to="/iphone">iPhone</Link>
          </li>
          <li>
            <Link to="/ipad">iPad</Link>
          </li>
        </ul>
      </nav>
    </div>

    <hr />

    <Route path="/" exact component={Home} />
    <Route path="/iphone" component={Phone} />
    <Route path="/ipad" component={Pad} />
  </Router>,
  document.getElementById('root')
);
