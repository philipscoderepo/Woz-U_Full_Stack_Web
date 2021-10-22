import React from 'react';
import ReactDOM from 'react-dom';

const App = props =>{
    const favoriteCars = [
        {make:'Honda', model:'CR-V '}, 
        {make: 'Toyota', model: 'Highlander'}, 
        {make: 'Ford', model: 'F-150'}, 
        {make: 'BMW', model: 'X3'}, 
        {make: 'Subaru', model: 'Crosstrek'}];
    return(
        <List favoriteCars={favoriteCars} />
    );
};

const List = props =>{
    const listItems = props.favoriteCars.map((car, index) => (
        <li key={index}>
            {car.make}: {car.model}
        </li>
    ));
    return <ul>{listItems}</ul>;
};

ReactDOM.render(
    <App />, document.getElementById('root')
);
