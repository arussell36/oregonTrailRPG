import React from 'react';
import API from '../utils/API';

function Route() {

    function loadCards() {
        API.getRoutes()
            .then(res => 
                console.log(res.data))
    }

    loadCards();
    return (
        <>
        this is a page.     
        </>

    )
}

export default Route;