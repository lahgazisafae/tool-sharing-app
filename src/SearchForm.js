import React from 'react';

const SearchForm = (props)=> {

    return(
        <div className="ui search">
            <input onChange={props.handleChange} name="search" className="prompt" type="text" placeholder="Search Tools..."/>
        </div>
    )

}

export default SearchForm;
