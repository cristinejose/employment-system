import React, { Component } from 'react';
import '../css/search.css';

class Search extends Component {


    render() {
        return (
            <div className= "search">
                <input type="text" className="input" placeholder="Search..." /> 
                <button type="button" className="search_button" onClick={this.handleChange}>Search</button>
            </div>
        );
    }
}
export {
    Search
}