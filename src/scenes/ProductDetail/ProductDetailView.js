import React from 'react';
import moment from 'moment';
import s from './ProductDetail.module.scss';
import Header from '../../components/Header/Header';
import location from '../../img/location.svg';
import Avatar from '../../components/Avatar/AvatarContainer';
import Button from './../../components/Button/Button';
import {Link, generatePath} from 'react-router-dom';
import {routes} from './../router';
import Api from '../../api';

function ProductDetailView({
  product,
  owner,
  ...props
}) {
  const styleAvatar = {
    background: "red",
    height: "72px",
    width: "72px",
    fontSize: "35px"
  };

  return (
    <React.Fragment>
      <Header theme="dark"/>
      <div className={s.container}>
        
        <div className={`${s.product} columnTwo offsetColumnOne`}>
          {props.isLoading && (
            <div>Loading ...</div>
          )}
          {product && (
            <React.Fragment>
              <div className={`${s.columnLeft} ${s.borderColumn}`}>
                <div className={s.productImage}>
                  <img src={product.photos[0]} alt={product.title}/>
                  <div className={s.price}>$ {product.price}</div>
                </div>
                <div className={s.textContent}>
                  <div>
                    <span className={s.name}>{product.title}</span>
                    <span className={s.date}>{moment(product.createdAt).format('dddd HH:mm')}</span>
                  </div>
                  <div className={s.locationBlock}>
                    <img src={location} alt="location"/>
                    <span className={s.location}>{product.location}</span>
                  </div>
                  <hr/>
                  <div className={s.description}>{product.description}</div>
                </div>
              </div>

            <div className={s.columnRight}>
              <div className={s.userBlock}>
                <div className={s.headerUserBlock}></div>
                <div className={s.avatar}>
                  <Avatar owner={owner} style={styleAvatar}/>
                </div>
                <div className={s.userName}>{owner
                    ? (
                      <Link to={routes.home}>{owner.fullName}</Link>
                    )
                    : ''}</div>
                <div className={s.userLocation}>{owner
                    ? (
                      <span>{owner.location}</span>
                    )
                    : ''}</div>
              </div>

              <Link
                to={{
                pathname: generatePath(routes.productCreateChat, {id: product.id}),
                state: {
                  modal: true
                }
              }}>
                <Button
                  text="Chat with seller"
                  disabledBtn
                  style={{
                  height: "47px",
                  margin: "15px 0"
                }}/>
              </Link>
            </div>
          </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
};

export default ProductDetailView;