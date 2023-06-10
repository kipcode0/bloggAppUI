import React from 'react'
//className={`page-link ${currentPage === number ? "active" : ""}`}
export default function Pagination({postsPerPage, totalPages,currentPage,paginate}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPages/postsPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(currentPage);
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <a onClick={()=>paginate(number)}className={`page-link ${currentPage===number ? "active":""}`}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
     
  );
}
