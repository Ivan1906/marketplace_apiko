import {handleActions, combineActions} from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    products: [],
    isLoading: false,
    isError: false,
    error: null
  },
  AddProduct: {
    product: {
      title: '',
      location: '',
      description: '',
      photos: [],
      price: 0
    },
    isLoading: false,
    isError: false,
    error: null
  },
  fetchFavorites: {
    favorites: [],
    isLoading: false,
    isError: false,
    error: null
  }
};

export default handleActions({
  [combineActions(actions.fetchLatest.start, actions.updateProduct.start)]: (state) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: true,
      isError: false,
      error: null
    }
  }),
  [actions.fetchLatest.success]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      products: action.payload.result
    },
    user: action.payload
  }),
  [combineActions(actions.fetchLatest.error, actions.updateProduct.error)]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      isError: true,
      error: action.payload
    }
  }),
  [actions.updateProduct.success]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      products: state
        .latest
        .products
        .map(el => el.id === action.payload
          ? {
            ...el,
            like: !el.like
          }
          : el),
      isLoading: false
    }
  }),
  [actions.addProduct.start]: (state) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      isLoading: true,
      isError: false,
      error: null
    }
  }),
  [actions.addProduct.success]: (state, action) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      isLoading: false,
      product: {
        ...state.AddProduct.product,
        ...action.payload.entities.products[action.payload.result]
      }
    }
  }),
  [actions.addProduct.error]: (state, action) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      isLoading: false,
      isError: true,
      error: action.payload
    }
  }),
  [actions.uploadImages.start]: (state) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      isLoading: true,
      isError: false,
      error: null
    }
  }),
  [actions.uploadImages.success]: (state, action) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      product: {
        ...state.AddProduct.product,
        photos: state
          .AddProduct
          .product
          .photos
          .concat(action.payload)
      },
      isLoading: false
    }
  }),
  [actions.uploadImages.error]: (state, action) => ({
    ...state,
    AddProduct: {
      ...state.AddProduct,
      isLoading: false,
      isError: true,
      error: action.payload
    }
  })
}, INITIAL_STATE);