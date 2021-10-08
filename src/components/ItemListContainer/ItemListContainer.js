import React from "react"
import ItemList from '../ItemList/ItemList';
import './item-list-container.css';

const ItemListContainer = ({text}) => {
    
    const showItems = () => {
        const cards = new Promise((resolve, reject) => {
            const datos = true;
            console.log(datos)
            
            if(datos) {
                alert('Searching... Close the messagge and discover your next destination');
                setTimeout(() => {
                    resolve();
                }, 3000)
            }
        });

        cards.then(() => {
            const cardContainer = document.getElementById('card-container');
            cardContainer.style.display = 'flex';
        });
    }

    return (
        <main>
            <div className="">
                <p className="cards-container__text">{text}</p>
                <button onClick={showItems} className="items-button">Travel</button>
            </div>
            <div className="cards-container" id='card-container'>
                <ItemList></ItemList>
            </div>
        </main>
    )
}

export default ItemListContainer