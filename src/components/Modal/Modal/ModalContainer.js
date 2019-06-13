import {connect} from 'react-redux'
import {compose} from 'recompose';
import ModalView from './ModalView';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(ModalView);