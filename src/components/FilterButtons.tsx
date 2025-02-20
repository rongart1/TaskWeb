import React from 'react';
import { filterBy } from '../App';

type props = {
  setFilter: (val: filterBy) => void;
  filter: filterBy;
};

export default function FilterButtons({ setFilter, filter }: props) {
  const handleFilterChange = (filter: filterBy) => {
    setFilter(filter);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <div className="btn-group" role="group" aria-label="Filter Buttons">
        <button 
          type="button" 
          className={`btn btn-lg btn-${filter === filterBy.all ? 'primary' : 'outline-primary'}`}
          onClick={() => handleFilterChange(filterBy.all)}
        >
          All
        </button>
        <button 
          type="button" 
          className={`btn btn-lg btn-${filter === filterBy.completed ? 'primary' : 'outline-primary'}`}
          onClick={() => handleFilterChange(filterBy.completed)}
        >
          Completed
        </button>
        <button 
          type="button" 
          className={`btn btn-lg btn-${filter === filterBy.unCompleted ? 'primary' : 'outline-primary'}`}
          onClick={() => handleFilterChange(filterBy.unCompleted)}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
}