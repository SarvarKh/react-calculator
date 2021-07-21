import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import Quote from './components/Quote';
import Error from './Error';
import Navbar from './components/Navbar';
import * as styles from './style/components.module.css';

const Routes = () => (
  <BrowserRouter>
    <div className={styles.navContainer}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <Navbar />
    </div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/components/App" component={App} />
      <Route path="/components/Quote" component={Quote} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
