import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CodeChallenge from './components/CodeChallenge/CodeChallenge';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CodeChallenge}/>
    </Switch>
  );
}