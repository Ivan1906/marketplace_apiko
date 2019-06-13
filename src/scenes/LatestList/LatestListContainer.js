import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers, mapProps} from 'recompose';
import LatestListView from './LatestListView';
import {productsOperations, productsSelectors} from '../../modules/products';
import {routes} from './../router';
import Api from './../../api/index';

const mapStateToProps = state => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latest.isLoading
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  updateProduct: productsOperations.updateProduct
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), mapProps(props => {
  const favorites = Api.Favorites.getFavorites;
  let products = props.products;
  favorites.forEach(favorite => products = products.map(product => product.id === favorite
    ? {
      ...product,
      like: true
    }
    : product.like
      ? product
      : {
        ...product,
        like: false
      }));

  return {
    ...props,
    products
  }
}), lifecycle({
  componentDidMount() {
    if (this.props.products.length === 0) {
      this
        .props
        .fetchLatest();
    };
  }
}), withHandlers({
  handleClickProduct: props => (evt, id) => {
    if (evt.target.getAttribute('name') === 'heart') {
      Api
        .Favorites
        .setFavorites(id);
      props.updateProduct(id);
    } else {
      props
        .history
        .push(routes.productDetail.replace(':id', id));
    }
  }
}));

export default enhancer(LatestListView);