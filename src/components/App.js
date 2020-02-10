import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 58eb296081f66d1f72480e7a1313550366e9d5dc26868135074e0ac815b340a9' 
            }
        });
        console.log(response.data.results);
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        );
    }
}

export default App;