import React from 'react';
import './item.css';

const Item = ({city, price, img}) => {
    return(
        <div className="item">
            <div className="item-img">
                <img className="item-img__picture" src={img} alt={city}></img>
            </div>
            <div className="item-information">
                <h2 className="item-information__city">{city}</h2>
                <p className="item-information__price">${price}</p>
            </div>
        </div>
    );
}

export default Item;