import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers} from 'recompose';
import ProductDetailView from './ProductDetailView';
import {withRouter} from 'react-router-dom';
import {productsOperations, productsSelectors} from '../../modules/products';

const mapStateToProps = (state, props) => ({
  product: productsSelectors.getProduct(state, props.match.params.id),
  isLoading: state.products.AddProduct.isLoading,
  //user: state.viewer.user,
  owner: productsSelectors.getProductOwner(state, props.match.params.id)
});

const mapDispatchToProps = {
  getProductById: productsOperations.getProductById
};

const enhancer = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withHandlers({
  handleProductMessage: props => e => {
    console.log(props, e);
  }
}), lifecycle({
  componentDidMount() {
    if (!this.props.product || !this.props.product.owner) {
      this
        .props
        .getProductById(this.props.match.params.id);
    }
  }
}));

export default enhancer(ProductDetailView);