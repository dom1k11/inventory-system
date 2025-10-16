const Checkbox = () => {
  return (
    <div className="col-md-1 text-center">
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Visible
      </label>
      <input
        id="flexCheckDefault"
        className="form-check-input"
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
