import React from "react"
import ItemList from '../ItemList/ItemList';
import './item-list-container.css';

const ItemListContainer = ({text}) => {
    
    const showItems = () => {
        console.log('funciona');
    }

    return (
        <main>
            <div>
                <p className="cards-container__text">{text}</p>
                <button onClick={showItems} className="items-button">Travel</button>
            </div>
            <div className="cards-container">
                <ItemList></ItemList>
            </div>
        </main>
    )
}

export default ItemListContainer