import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers} from 'recompose';
import LatestListView from './LatestListView';
import {productsOperations, productsSelectors} from '../../modules/products';
import {routes} from './../router';

const mapStateToProps = state => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latest.isLoading
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), lifecycle({
  componentDidMount() {
    if (this.props.products.length === 0) {
      this
        .props
        .fetchLatest();
    }
  }
}), withHandlers({
  handleClickProduct: props => (evt, id) => {
    if (evt.target.getAttribute('name') === 'heart') {
      // TODO: set like for product by id
    } else {
      props
        .history
        .push(routes.productDetail.replace(':id', id));
    }
  }
}));

export default enhancer(LatestListView);