import React, { Component } from 'react';
import ListPageContainer from "../container/ListPageContainer";
class HomePage extends Component {
    render() {
        const header = {
            textAlign: 'center',
            fontSize: '3em',
            margin: '15px 0',
            color: '#5C6BC0'
        }
        return (
            <div className="homepage">
                <h1 style={header}>To Do List</h1>
                <ListPageContainer/>
            </div>
         );
    }
}
 
export default HomePage;