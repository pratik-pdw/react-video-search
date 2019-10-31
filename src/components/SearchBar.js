import React from 'react';

class SearchBar extends React.Component{

    state = { searchTerm: '' };

    onInputChange = (e)=>{
        this.setState({ searchTerm: e.target.value });
    }

    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);

        // make sure we call a callback from parent component
    }

    render(){
        return (
            <form onSubmit={ this.onFormSubmit }  >
            <div className="form-group">
            <label className="display-4" htmlFor="searchBar">Search Videos</label>

                <input value={ this.state.searchTerm } 
                onChange={ this.onInputChange } 
                name="searchBar" 
                className="form-control" 
                autoComplete="off"
                type="text" 
                placeholder="Search for your favourite videos"
                />

            </div>
            </form>
        );
    }
}

export default SearchBar;