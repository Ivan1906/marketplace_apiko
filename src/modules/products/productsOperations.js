import * as actions from './productsActions';
import Api, {schemas} from '../../api';
import {normalize} from 'normalizr';

export function fetchLatest() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api
        .Products
        .getLatest();

      const {result, entities} = normalize(res.data, schemas.ProductList);

      dispatch(actions.fetchLatest.success({result, entities}));
    } catch (error) {
      console.error(error);
      dispatch(actions.fetchLatest.error({message: error.message}));
    }
  }
};

export function addProduct(product) {
  return async function initThunk(dispatch) {
    let res;
    try {
      dispatch(actions.addProduct.start());

      res = await Api
        .Products
        .addProduct(product);

      dispatch(actions.addProduct.success(res.data));
    } catch (error) {
      console.error(error);
      dispatch(actions.addProduct.error({message: error.message}));
    } finally {
      return res.data;
    }
  }
};

export function getProductById(id) {
  return async function initThunk(dispatch) {
    let res;
    try {
      dispatch(actions.addProduct.start());

      res = await Api
        .Products
        .getProductById(id);

      const {result, entities} = normalize(res.data, schemas.Product);

      dispatch(actions.addProduct.success({result, entities}));
    } catch (error) {
      console.error(error);
      dispatch(actions.addProduct.error({message: error.message}));
    }
  }
};

export function uploadImages(images) {
  return async function initThunk(dispatch) {
    let res;
    try {
      dispatch(actions.uploadImages.start());

      res = await Api
        .Products
        .uploadImages(images);

      dispatch(actions.uploadImages.success(res.data));
    } catch (error) {
      console.error('uploadImages', error);
      dispatch(actions.uploadImages.error({message: error.message}));
    } finally {
      return res.data;
    }
  }
};

export function updateProduct(id) {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.updateProduct.start());

      dispatch(actions.updateProduct.success(id));
    } catch (error) {
      console.error(error);
      dispatch(actions.updateProduct.error({message: error.message}));
    }
  }
};