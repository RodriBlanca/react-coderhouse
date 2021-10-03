import React from "react"
import Item from "../Item/Item"

const ItemList = () => {
    const products = [
        {id: 1, name: 'Madrid', price: 100000, pictureUrl:"../public/assets/img/madrid.jpg"},
        {id: 2, name: 'Barcelona', price: 110000, pictureUrl:"../public/assets/img/barcelona.jpg"},
        {id: 3, name: 'Paris', price: 90000, pictureUrl:"../public/assets/img/paris.jpg"},
        {id: 4, name: 'Londres', price: 110000, pictureUrl:"../public/assets/img/londres.jpg"},
        {id: 5, name: 'Berlin', price: 85000, pictureUrl:"../public/assets/img/berlin.jpg"}
    ];
    console.log(<Item props={products}></Item>)

    return(
        <>
            <Item props={products}></Item>
            <Item props={products}></Item>
            <Item props={products}></Item>
        </>
    )
}

export default ItemList