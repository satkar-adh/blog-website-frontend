import React from 'react';
import { useNavigate } from 'react-router-dom';


function SearchResults({ searchItems }) {
    // const navigator = useNavigate()
    function handleClick(id){
        // navigator(`/edit/${id}`)
    }
    return (
        <div className="search-results">
            <ul className='search-result'>
                {searchItems.map(item => (
                    <li key={item._id} onClick={() => handleClick(item.id)}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;