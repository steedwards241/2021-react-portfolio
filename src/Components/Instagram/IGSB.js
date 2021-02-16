import React, { useState } from 'react';

const IGSearchBar = () => {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [cancelSearchImage, setCancelSearchImage] = useState("https://pbs.twimg.com/media/EoLXw2XXMAU5Ltk?format=webp&name=tiny");
    const [image, setImage] = useState("");

    const searchBarChangeHandler = (event) => {
        setSearchBarValue = event.target.value;
    }

    const cancelClickHandler = () => {
        setImage = <img src={cancelSearchImage} onClick={cancelExitHandler}></img>
    }

    const cancelExitHandler = () => {
        setImage = "";
    }

    return (
        <div className="searchBar-Container">
            <input 
                type="text" 
                value={searchBarValue} 
                onChange={searchBarChangeHandler}
                placeholder="Search"
                className="searchBar"
                onClick={cancelClickHandler}
            />
            {image}
        </div>
    )
}

export default IGSearchBar;