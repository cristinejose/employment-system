import React, { Component } from 'react';
import '../css/searchEmployee.css';

class SearchEmployee extends Component {
    render() {
        return (
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." className="search" />
                    <button type="submit" className="search_button"> SEARCH</button>
                </form>
            </div>
        );
    }
}
export default SearchEmployee;