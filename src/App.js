import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './app.css'

const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <ItemListContainer text="Your travel is near, click to see your next destination"></ItemListContainer>
        </>
    )
}

export default App