// Default React Library
import React from 'react';

//React Component 
import Card from './Card';

function Favourites() {
    if (sessionStorage.getItem('favouriteList') === null) {
        const favourites = [];
        sessionStorage.setItem('favouriteList', JSON.stringify(favourites)); //using sessionStorage and then converting JSONdata into a string
      }

    let favouritesList = JSON.parse(sessionStorage.getItem('favouriteList'));
    let count = 0;

    function getFavourites() {
        return(
        favouritesList.map(result => {
            count = count + 1;
            return (
            <div className='fav-items-div'>
                <Card 
                id={result.id}
                key={result.key}
                kind={result.kind}
                link={result.link}
                name={result.name}
                artistName={result.artistName}
                imgThumbnail={result.imgThumbnail}    
                />
                <br/>
                <button className='btn btn-lg btn-info DeleteBtn' onClick={(e) => delFavourite(count)}>Delete</button>
            </div>
            )}
        ))
    }

    // Deletes an item from array
    function delFavourite(index) {
        let delFav = [];
        delFav = favouritesList.splice(index - 1, 1);
        sessionStorage.setItem('favouriteList', JSON.stringify(delFav)); //converting JSON data into a string
        window.location.reload();
    }

    return(
        <div id='Favs'>
            <h1 style={{fontSize: '30px', color: 'white'}}>Favourite Items:</h1>
            <div className='search-results'  id ='search-results'>
                    {favouritesList.length !== 0 ? getFavourites() : <h3>None</h3>} 
                </div>
        </div>
    )
}

export default Favourites;