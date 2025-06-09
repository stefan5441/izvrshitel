type Props = {
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ setItemsPerPage, setCurrentPage, currentPage, totalPages }: Props) => {
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="paginationContainer">
      <div className="paginationLeftSide">
        <button
          className="paginationButton"
          onClick={() => setCurrentPage((prevPageNumber) => prevPageNumber - 1)}
          disabled={currentPage === 1}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div>{`${currentPage} /   ${totalPages}`}</div>
        <button
          className="paginationButton"
          onClick={() => setCurrentPage((prevPageNumber) => prevPageNumber + 1)}
          disabled={currentPage === totalPages}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="paginationRightSide">
        <select className="paginationSelect" onChange={handleItemsPerPageChange} defaultValue="10">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label className="paginationSelectLabel">items per page</label>
      </div>
    </div>
  );
};
