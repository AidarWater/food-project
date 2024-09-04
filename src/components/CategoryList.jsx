import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="list">
            {catalog.map((el, index) => (
                <CategoryItem key={el.id || index} {...el} />
            ))}
        </div>
    );
};

export default CategoryList;
