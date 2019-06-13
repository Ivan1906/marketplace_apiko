import {connect} from 'react-redux';
import {compose} from 'recompose';
import AvatarView from './AvatarView';

const mapStateToProps = state => ({user: state.viewer.user});

const enhancer = compose(connect(mapStateToProps, undefined),);

export default enhancer(AvatarView);