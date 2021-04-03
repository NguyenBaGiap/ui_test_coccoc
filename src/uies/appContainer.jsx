import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'redux/containers/pages/home';

class AppContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/point-bonus" component={Home} />
          <Route exact path="/ranks" component={Home} />
          <Route exact path="/questions" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default AppContainer;
