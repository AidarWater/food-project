import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal: str, strMealThumb: img, idMeal: id } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={str} />
            </div>
            <div className="card-content">
                <span className="card-title">{str}</span>
            </div>
            <div className="card-action"></div>
            <Link to={`/meal/${id}`} className="btn">
                Watch recipe
            </Link>
        </div>
    );
};

export default Meal;
