import React, { Fragment } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <ItemListContainer></ItemListContainer>
        </Fragment>
    )
}

export default App