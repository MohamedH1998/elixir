import React from 'react'
import './Search.css'
const Search = ({value, onChange}) => {
    return (
        <div className="search-container">
            <input onChange={(e) => onChange(e.target.value)} value={value} className="search" type="text" placeholder="Search for your favourite smoothie..." />
            </div>
    )
}

export default Search
