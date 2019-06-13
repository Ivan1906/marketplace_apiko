import {connect} from 'react-redux';
import {compose, withHandlers} from 'recompose';
import AvatarDropDownView from './AvatarDropDownView';
import {authOperations} from '../../modules/auth';
import {routes} from './../../scenes/router';

const mapStateToProps = state => ({user: state.viewer.user});

const mapDispatchToProps = {
  logout: authOperations.logout
}

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), withHandlers({
  handleShow: props => evt => {
    let show = evt.target.dataset
      ? evt.target.dataset.show
      : 'none';
    const dropdown = document.getElementById("dropdownContent");

    if (show !== 'none') {
      if (show === 'true') {
        evt
          .target
          .setAttribute('data-show', "false");
        dropdown.style.display = 'none'
      } else {
        evt
          .target
          .setAttribute('data-show', "true");
        dropdown.style.display = 'block'
      }
    }
  },
  handleLogout: ({logout}) => () => {
    logout();
    window.location = routes.login;
  }
}));

export default enhancer(AvatarDropDownView);