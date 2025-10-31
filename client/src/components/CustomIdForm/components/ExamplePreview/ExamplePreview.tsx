const ExamplePreview = ({ preview }) => {
  return (
    <h2>
      <strong>Example:</strong> <span className="text-secondary">{preview || "—"}</span>
    </h2>
  );
};

export default ExamplePreview;
