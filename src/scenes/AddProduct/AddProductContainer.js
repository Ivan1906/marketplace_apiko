import {connect} from 'react-redux';
import {compose, withState, withHandlers} from 'recompose';
import AddProductView from './AddProductView';
import {productsOperations} from '../../modules/products';
import {routes} from './../router';

const mapStateToProps = state => ({isLoading: state.products.AddProduct.isLoading, errorMassage: state.products.AddProduct.error, photos: state.products.AddProduct.product.photos});

const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
  uploadImages: productsOperations.uploadImages
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), withState('initialValue', 'ChangeInitialValue', {
  title: '',
  location: '',
  description: '',
  photos: [],
  price: 0
}), withState('disabledBtn', 'changeDisabledBtn', false), withHandlers({
  setInitialValue: ({ChangeInitialValue, initialValue, changeDisabledBtn, disabledBtn}) => (name, value, errors) => {

    ChangeInitialValue(() => ({
      ...initialValue,
      [name]: value
    }));

    let {title, location, description, price} = ({
      ...initialValue,
      [name]: value
    });

    if (title !== '' && location !== '' && description !== '' && parseFloat(price) !== 0 && price !== '') {
      changeDisabledBtn(() => disabledBtn = true);
    } else {
      changeDisabledBtn(() => disabledBtn = false);
    }
  },
  handleAddProduct: ({initialValue, addProduct, uploadImages, history}) => async() => {
    const photos = [];

    for (let i = 0; i < initialValue.photos.length; i++) {
      let image = await uploadImages(initialValue.photos[i]);
      photos.push(image);
    };

    initialValue = {
      ...initialValue,
      photos
    };

    const product = await addProduct(initialValue);
    history.push(routes.productDetail.replace(':id', product.id));
  }
}));

export default enhancer(AddProductView);