import React from 'react';
import Item from '../Item/Item';
import './itemList.css';

const ItemList = () => {

    const products = [
        {city: 'Barcelona', price: 110000, id: 1, img: '../../../public/assets/img/barcelona.jpg'},
        {city: 'Madrid', price: 100000, id: 2, img: '../../../public/assets/img/madrid.jpg'},
        {city: 'Londres', price: 105000, id: 3, img: '../../../public/assets/img/londres.jpg'},
        {city: 'Berlin', price: 90000, id: 4, img: '../../../public/assets/img/berlin.jpg'},
        {city: 'Paris', price: 95000, id: 5, img: '../../../public/assets/img/paris.jpg'}
    ];

    return(
        <>
            <Item city={products[0].city} price={products[0].price} img={products[0].img}></Item>
            <Item city={products[1].city} price={products[1].price}></Item>
            <Item city={products[2].city} price={products[2].price}></Item>
        </>
    );
}

export default ItemList;