import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import AppContainer from 'redux/containers/appContainer';
import { configureStore, history } from 'redux/store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = withRouter(AppContainer);

const store = configureStore();
        ReactDOM.render(
          <React.StrictMode>
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <React.Fragment>
                  <App />
                </React.Fragment>
              </ConnectedRouter>
            </Provider>
          </React.StrictMode>,
          document.getElementById('root')
        );
