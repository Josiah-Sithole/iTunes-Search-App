// Imported React, useState and UseEffect
import React, {useState, useEffect} from 'react';

// React-bootstrap library
import BSCard from 'react-bootstrap/Card';
 
// inside our functional component, we pass in a function useState.
// Creating hooks using useState
function Card(props) {
    const [isFavourite, setIsFavourite] = useState(false);
    const [display, setDisplay] = useState(false);
    const [click, setClicked] = useState(false);
    
    let btnClicked = click? 'button-clicked' : 'button-not-clicked';

    // addtoFavourites() function is triggered by an Onclick event. 
    // The JSOn data will be turned into a string (stringify)
    function addToFavourites() {
        if (sessionStorage.getItem('favouriteList') === null) {
            const favourites = [];
            sessionStorage.setItem('favouriteList', JSON.stringify(favourites));
          }
        // data turned into JS object from JSON
        let addFavourite = JSON.parse(sessionStorage.getItem('favouriteList'));
        setClicked(true);
 
        const newFavourite = {
            id:props.id,
            key:props.key,
            kind:props.kind,
            link:props.link,
            name:props.name,
            artistName:props.artistName,
            imgThumbnail:props.imgThumbnail,    
          };

        for (let i=0; i<addFavourite.length; i++) {
            if (addFavourite[i].name === newFavourite.name) {
                setIsFavourite(!isFavourite);
                alert("You've already added this item"); 
                return;
            }
        }

        //new object pushed to the existing array. 
        //data will be in string format 
        addFavourite.push(newFavourite)
        sessionStorage.setItem('favouriteList', JSON.stringify(addFavourite)); 
        alert('Item added to Favorites');
        setDisplay(true);
        window.location.reload()
    }

    useEffect(() => {
        if (display === true) { 
            for (let i=0; i<1; i++) {

                // forceUpdate();
                setDisplay(false);
            }
        }
        
        }, [isFavourite, display]
    )

    return (
        //display this information to the client side
        <BSCard className='display-card-body card-group mb-3 h-100'>
            <div className='card'>
            <BSCard.Link href={props.link}>
                <BSCard.Img src={props.imgThumbnail} className='card-img'/>
            </BSCard.Link>
            <BSCard.Body>
                <BSCard.Title><strong>{props.name}</strong></BSCard.Title>
                <BSCard.Subtitle className='mb-2 text-muted'>{props.id}</BSCard.Subtitle>
                <BSCard.Subtitle className='mb-2 card-type'>{props.kind}</BSCard.Subtitle>
                <BSCard.Text>
                {props.artistName}
                </BSCard.Text>
                <BSCard.Link className='card-links' href={props.link}>Link to item <i class='fas fa-link'></i></BSCard.Link>
                <BSCard.Link className={`${btnClicked} card-links`}  
                id="addFavBtn" onClick={() => addToFavourites()}>Favourite <i class='far fa-heart'></i></BSCard.Link>
            </BSCard.Body>
            </div>
        </BSCard>
    )
}

export default Card;