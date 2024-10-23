import React from 'react';

const Filter = ({ setFilterText }) => {
    const handleChange = (e) => {
        setFilterText(e.target.value); // Update filter text when user types
    };

    return (
        <div className="filter-container p-4">
            <input
                type="text"
                placeholder="Search emails..."
                onChange={handleChange}
                className="filter-input p-2 w-full border rounded"
            />
        </div>
    );
};

export default Filter;
