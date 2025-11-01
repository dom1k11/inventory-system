const Pagination = ({page, onPageChange}) => {
  return (
    <nav className="my-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onPageChange((p) => Math.max(p - 1, 1))}>
            Previous
          </button>
        </li>
        <li className="page-item active">
          <span className="page-link">{page}</span>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => onPageChange((p) => p + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
