import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AppHeader from 'uies/organisms/appHeader';

const mapStateToProps = (state) => ({
  session: null,
  pathName: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (path) => () => {
    console.log('path to', path);
    return dispatch(push(path));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
