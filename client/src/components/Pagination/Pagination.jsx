import React from 'react';

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex gap-14 justify-center">
        {pageNumbers.map((number) => (
          <h1 key={number} className={`text-2xl font-medium ${currentPage === number ? 'text-green' : ''}`} onClick={() => paginate(number)}>{number}</h1>
        ))}
        <h1 className="text-2xl font-medium text-green" onClick={() => paginate(currentPage + 1)}>Next</h1>
      </div>
    </>
  );
};

export default Pagination;
