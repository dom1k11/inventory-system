const TitleInput = ({ field, onChange }) => {
  return (
    <div className="col-md-3">
      <label className="form-label">Title</label>
      <input
        className="form-control"
        value={field.title}
        placeholder="Enter title"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TitleInput;
