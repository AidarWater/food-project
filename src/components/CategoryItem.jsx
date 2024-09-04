import { Link } from 'react-router-dom';
import React from 'react';

const CategoryItem = (props) => {
    const {
        idCategory: id,
        strCategory: str,
        strCategoryThumb: img,
        strCategoryDescription: description,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={str} />
            </div>
            <div className="card-content">
                <span className="card-title">{str}</span>
                <p>{description.slice(0, 60)}...</p>
            </div>
            <div className="card-action"></div>
            <Link to={`/category/${str}`} className="btn">
                Watch category
            </Link>
        </div>
    );
};

export default CategoryItem;
