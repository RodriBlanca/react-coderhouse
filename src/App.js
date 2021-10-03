import React, { Fragment } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemList from './components/ItemList/ItemList'
// import { products } from './products'
import './app.css'

const App = () => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <ItemListContainer text="we accompany you to your next destination">
                <ItemList></ItemList>
            </ItemListContainer>
        </Fragment>
    )
}

export default App