import React from 'react';
import Item from '../Item/Item';
import './itemList.css';
import barcelona from '../../assets/barcelona.jpg';
import madrid from '../../assets/madrid.jpeg';
import paris from '../../assets/paris.jpg';
import londres from '../../assets/londres.jpg';
import berlin from '../../assets/berlin.jpg';

const ItemList = () => {

    const products = [
        {city: 'Barcelona', price: 110000, id: 1, img: barcelona},
        {city: 'Madrid', price: 100000, id: 2, img: madrid},
        {city: 'Londres', price: 105000, id: 3, img: londres},
        {city: 'Berlin', price: 90000, id: 4, img: berlin},
        {city: 'Paris', price: 95000, id: 5, img: paris}
    ];

    return(
        <>
            <Item city={products[0].city} price={products[0].price} img={products[0].img}></Item>
            <Item city={products[1].city} price={products[1].price} img={products[1].img}></Item>
            <Item city={products[2].city} price={products[2].price} img={products[2].img}></Item>
        </>
    );
}

export default ItemList;