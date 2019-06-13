import React, {Component} from 'react';
import s from './Product.module.scss';
import dislike from '../../img/dislike.svg';
import like from '../../img/like.svg';

class Product extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.product.like !== this.props.product.like;
  }

  render() {
    let {product, onClick} = this.props;
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
          <img
            name="heart"
            src={product.like
            ? like
            : dislike}
            alt="heart"/>
        </div>
        <span className={s.name}>{product.title}</span>
        <span className={s.price}>$ {product.price}</span>
      </div>
    );
  }
};

export default Product;