import React from 'react';
import s from './Product.module.scss';
import dislike from '../../img/dislike.svg';

function Product({product, onClick}) {
  return (
    <div
      className={s.product}
      id={product.id}
      onClick={evt => onClick(evt, product.id)}>
      <img
        className={s.mainImg}
        src={product.photos && product.photos.length > 0
        ? product.photos[0]
        : ''}
        alt={product.title}/>
      <div className={`${s.circle} center`} name="heart">
        <img name="heart" src={dislike} alt="heart"/>
      </div>
      <span className={s.name}>{product.title}</span>
      <span className={s.price}>$ {product.price}</span>
    </div>
  );
};

export default Product;