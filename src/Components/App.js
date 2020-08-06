import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import HomeMobile from './HomeMobile'
import helpTips from './HelpTips'
import Testimonial from './Testimonial'


export default function App() {
  return (
    <BrowserRouter>
        <div class="App">
          <Header />
          <Switch>
              <Route path="/" exact component={HomeMobile} />
              <Route path="/helpTips" exact component={helpTips} />
              <Route path="/testimonial" exact component={Testimonial} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

