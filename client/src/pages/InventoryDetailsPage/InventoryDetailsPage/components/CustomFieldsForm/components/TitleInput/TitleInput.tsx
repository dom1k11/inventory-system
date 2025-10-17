const TitleInput = ({field}) => {
  return (
    <div className="col-md-3">
      <label className="form-label">Title</label>
      <input
        className="form-control"
        value={field.title}
        placeholder="Enter title"
        
      />
    </div>
  );
};

export default TitleInput;
