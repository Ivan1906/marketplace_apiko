import {createAsyncActions} from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');
export const addProduct = createAsyncActions('products/ADD_PRODUCT');
export const uploadImages = createAsyncActions('products/UPLOAD_IMAGES');
export const getProductById = createAsyncActions('products/GET_PRODUCT');