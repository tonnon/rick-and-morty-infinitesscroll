import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../components/List/List.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/:page?" exact component={List} />
    </Switch>
  );
}