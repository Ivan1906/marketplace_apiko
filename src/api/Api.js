import axios from 'axios';

const urls = {
  'login': '/api/auth/login',
  'register': '/api/auth/register',
  'updateUser': '/api/account/user',
  'getViewer': '/api/account/user',
  'productsLatest': '/api/products/latest',
  'addproduct': '/api/products',
  'uploadImages': '/api/upload/images',
  'getProduct': '/api/products/:id'
};

export const Favorites = {
  _favorites: [],

  get getFavorites() {
    return this._favorites;
  },

  init() {
    try {
      let favorites = window
        .localStorage
        .getItem('favorites');
      this.favorites = JSON.parse(favorites);
    } catch (e) {
      console.error(e);
    }
  },

  setFavorites(productId) {
    const element = this
      ._favorites
      .find(elem => elem === productId);
    if (element) {
      this._favorites = this
        ._favorites
        .filter(el => el !== productId);
    } else {
      this._favorites = this
        ._favorites
        .concat(productId);
    }
    this._setFavorites();
  },

  _setFavorites() {
    try {
      window
        .localStorage
        .setItem('favorites', JSON.stringify(this._favorites),);
    } catch (e) {
      console.error(e);
    }
  }
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._setToken(token);
    this._setTokenToAxios(token);
  },

  init() {
    try {
      let token = window
        .localStorage
        .getItem('token');
      this._token = JSON.parse(token);
      this._setTokenToAxios(this._token);
      Favorites.init()
    } catch (e) {
      console.error(e);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      window
        .localStorage
        .removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },

  _setToken() {
    try {
      window
        .localStorage
        .setItem('token', JSON.stringify(this._token),);
    } catch (e) {
      console.error(e);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  },

  update(body) {
    return axios.put(urls.updateUser, body)
  }
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },

  addProduct(body) {
    return axios.post(urls.addproduct, body);
  },

  getProductById(id) {
    return axios.get(urls.getProduct.replace(':id', id));
  },

  uploadImages(body) {
    let bodyFormData = new FormData();
    bodyFormData.append('image', body);

    return axios({
      method: 'post',
      url: urls.uploadImages,
      data: bodyFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    });
  }
}

export function init() {
  Auth.init();
}
