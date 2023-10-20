import React from 'react'
import * as Icons from 'react-bootstrap-icons'

const Search = ({ handleSearchNote }) => {
    return (
        <div>
            
            <label htmlFor="findNote">
        <div className='search'>
                <Icons.Search className='searchIcon' />
            
            <input id='findNote' onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder='type to Search...' />
            
        </div>
        </label>
        </div>
    )
}

export default Search
