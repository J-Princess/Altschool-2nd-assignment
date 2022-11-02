import React, { useEffect, useState } from "react";
import './style.css'

function Pagination(props) {
  const { data, UseComponent, pageLimit, dataLimit } = props;

  const [thisPage, setThisPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, [thisPage]);

  function getPaginatedData() {
    const start = (thisPage - 1) * dataLimit;
    const endIndex = start + dataLimit;
    return data.slice(start, endIndex);
  }

  function goToPreviousPage() {
    setThisPage((prevPage) => prevPage - 1);
  }
  function goToNextPage() {
    setThisPage((prevPage) => prevPage + 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setThisPage(pageNumber);
  }

  function getPagingForum() {
    let start = 0;
    if (thisPage > 5) {
      start = 5;
    }
    return new Array(pageLimit).fill().map((any, index) => {
      return start + index + 1;
    });
  }

  return (
    <div className="pagination">
      <div className="users-left-right">
        <div className="left-side"></div>
        <div className="all-users">
          {getPaginatedData().map((data, index) => {
            return <UseComponent data={data} id={index} key={index} />;
          })}
        </div>
        <div className="right-side"></div>
      </div>

      <div className="buttons">
        <button
          onClick={goToPreviousPage}
          className={`prev ${thisPage == 1 ? "disabled" : " "}`}
        >
          prev
        </button>
        {getPagingForum().map((item, index) => {
          return (
            <button
              key={index}
              onClick={changePage}
              className={`pages  ${item == thisPage ? "active" : " "
                }`}
            >
              <span>{item}</span>
            </button>
          );
        })}
        <button
          onClick={goToNextPage}
          className={`next ${thisPage == 10 ? "disabled" : " "}`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;