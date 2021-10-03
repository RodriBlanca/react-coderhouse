import React from "react"
import ItemList from "../ItemList/ItemList"
import './item-list-container.css'

const ItemListContainer = () => {
    return (
        <div className="cards-container">
            <ItemList></ItemList>
        </div>
    )
}

export default ItemListContainer