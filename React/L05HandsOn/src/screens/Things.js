import React from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router';

const Things = ({match}) => {
    if(match.params.thingsID == 'car'){
        return(
            <img src={'../img/car.jpg'} style={{height: 500}}></img>
        );
    }
    else if(match.params.thingsID == 'food'){
        return(
            <img src={'../img/food.jpg'} style={{height: 500}}></img>
        );
    }
    else{
        return(
            <img src={'../img/movie.jpg'} style={{height: 500}}></img>
        );
    }
};

export default Things;