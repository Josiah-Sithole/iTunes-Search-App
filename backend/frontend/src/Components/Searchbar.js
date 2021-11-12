// Default React Component 
import React from 'react'

//React-bootstrap
import Card from './Card';

//in order to use fetch we install 'isomorphic-fetch'
require('isomorphic-fetch'); 

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { //set initial object
            error: null,
            option: 'all',
            search: '',
            results: [],
            reload: false
        }       
    }

    handleSubmit(event) {
        if (this.state.search === '') {
            return alert('Enter an item');
        }
        this.setState({results: []});
        event.preventDefault();
        fetch('/search', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ //turning data from a JSON format into a string
                search:this.state.search,
                option:this.state.option
            })
        })
        .then(res => res.json())
        .then(response => {
            this.setState({results: response})
            this.forceUpdate();
            console.log(this.state);
        })

        .catch(error => { //catch the error
            alert('Server is currently offline. Please try again later.');
            this.setState(error);
            console.log(error);
        })
    }

    // Cards will display the search results by the user
    searchResults() {
        const results = this.state.results.results;
        return (
        results.map(result => 
            <Card 
            id={result.collectionId}
            key={result.collectionArtistId}
            kind={result.kind}
            link={result.trackViewUrl}
            name={result.trackName}
            artistName={result.artistName}
            imgThumbnail={result.artworkUrl100}    
            /> )
        )
    }

    // display the following
    render() {
        return (
            <div className='search-form' id='Search'>
                <h1 style={{fontSize: '40px', color: 'blue'}}>iTunes Search App</h1>
                <form className='search-bar-form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search' onChange={(event) => this.setState({search:event.target.value})}></input>
                    <div className='dropdown'>
                        <select className='drop-btn form-select form-select-lg mb-3 mt-3' onChange={(event) => this.setState({option: event.target.value})}>
                            <option value='all'>ALL</option> 
                            <option value='movie'>MOVIES</option>
                            <option value='music'>MUSIC</option>
                            <option value='podcast'>PODCAST</option>
                            <option value='audiobook'>AUDIOBOOK</option>
                            <option value='shortFilm'>SHORT-FILM</option>
                            <option value='tvShow'>TV-SHOW</option>
                            <option value='ebook'>E-BOOKS</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-m btn-primary mb-3'>Search iTunes<br/><i className='fa fa-search'></i></button>
                </form>
                <div className='search-results'  id ='search-results'>
                    {this.state.results.length !== 0 ? <div><h3>Results</h3>{this.searchResults()}</div> : ''} 
                </div>
            </div>
        )
    }
}

export default Searchbar;

