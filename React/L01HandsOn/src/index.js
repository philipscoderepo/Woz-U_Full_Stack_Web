import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Blue');
const color2 = React.createElement('li', {}, 'Green');
const color3 = React.createElement('li', {}, 'Orange');

const music1 = React.createElement('li', {}, 'Avril Lavigne - Girlfriend');
const music2 = React.createElement('li', {}, 'Green Day - Basket Case');
const music3 = React.createElement('li', {}, 'Nirvana - Heart Shaped Box');

const food1 = React.createElement('li', {}, 'Hamburger');
const food2 = React.createElement('li', {}, 'Spaghetti');
const food3 = React.createElement('li', {}, 'Pizza');

const website1Link = React.createElement('a', {href: 'https://www.youtube.com/'}, 'www.youtube.com');
const website1 = React.createElement('li', {}, website1Link);
const website2Link = React.createElement('a', {href: 'https://www.google.com/'}, 'www.google.com');
const website2 = React.createElement('li', {}, website2Link);
const website3Link = React.createElement('a', {href: 'https://www.amazon.com/'}, 'www.amazon.com');
const website3 = React.createElement('li', {}, website3Link);

ReactDOM.render(  
    React.createElement('div', {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement('ul', {}, 
        React.createElement('li', {className: 'favoriteColors'}, 'Favorite Colors',
            React.createElement('ol', {}, color1, color2, color3)),
        React.createElement('li', {className: 'favoriteMusic'}, 'Favorite Music',
            React.createElement('ol', {}, music1, music2, music3)),
        React.createElement('li', {className: 'favoriteFood'}, 'Favorite Food',
            React.createElement('ol', {}, food1, food2, food3)),
        React.createElement('li', {className: 'favoriteWebsite'}, 'Favorite Websites',
            React.createElement('ol', {}, website1, website2, website3)))),
    document.getElementById('root')
);