import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'redux/containers/pages/home';

class AppContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default AppContainer;
