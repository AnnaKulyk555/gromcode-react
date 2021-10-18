import React from 'react';

const Pagination = ({ pageNumber, handlePrev, handleNext, usersCount, usersPerPage }) => {
  const isPrevDisable = pageNumber > 1;
  const isNextDisable = pageNumber < Math.ceil(usersCount / usersPerPage);

  return (
    <div className="pagination">
      <button onClick={handlePrev} className="btn" disabled={!isPrevDisable}>
        {isPrevDisable && '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button onClick={handleNext} className="btn" disabled={!isNextDisable}>
        {isNextDisable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
