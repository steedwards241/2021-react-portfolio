import React, { Component } from 'react';

class IGSearchBar extends Component {

    constructor() {
        super();
        this.state = {
            searchBarValue: '',
            cancelSearchImage: "https://pbs.twimg.com/media/EoLXw2XXMAU5Ltk?format=webp&name=tiny",
            image: ""
        };
      }

    searchBarChangeHandler = (event) => {
        this.setState({searchBarValue: event.target.value});
    }

    cancelClickHandler = () => {
        this.setState({image: <img src={this.state.cancelSearchImage} onClick={this.cancelExitHandler}></img>})
    }

    cancelExitHandler = () => {
        this.setState({image: ""})
    }
          
    render(){
        return (
            <div className="searchBar-Container">
                <input 
                    type="text" 
                    value={this.state.searchBarValue} 
                    onChange={this.searchBarChangeHandler}
                    placeholder="Search"
                    className="searchBar"
                    onClick={this.cancelClickHandler}
                />
                {this.state.image}
            </div>
        )
    }
}

export default IGSearchBar;