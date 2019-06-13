import {createSelector} from 'reselect';

const photos = state => state.products.AddProduct.product.photos;
const getProductEntities = state => state.entities.products;
const getUserEntities = state => state.entities.users;
const getLatestProducts = state => state.products.latest.products;

export const getPhotos = createSelector(photos, state => state,);

export const getLatest = createSelector([
  getProductEntities, getLatestProducts
], (entities, ids) => ids.map(i => entities[i]));

export const getProduct = createSelector((state, id) => getProductEntities(state)[id], item => item);

export const getProductOwner = createSelector((state, id) => {
  let users = getUserEntities(state);
  let products = getProductEntities(state);
  if (Object.values(users).length > 0) {
    const product = products[id];
    return users[product.owner || product.ownerId]
  } else {
    return;
  }
}, item => item);