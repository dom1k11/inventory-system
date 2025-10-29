export function buildForm(fieldTemplates, handleChange) {
  return fieldTemplates.map((template) => {
    switch (template.field_type) {
      case "text_single":
        return (
          <div key={template.id} className="mb-3">
            <label htmlFor={template.id} className="form-label">
              {template.title}
            </label>
            <input
              id={template.id}
              type="text"
              name={template.title}
              placeholder={template.title}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        );

      case "text_multi":
        return (
          <div key={template.id} className="mb-3">
            <label htmlFor={template.id} className="form-label">
              {template.title}
            </label>
            <textarea
              id={template.id}
              name={template.title}
              placeholder={template.title}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        );

      case "number":
        return (
          <div key={template.id} className="mb-3">
            <label htmlFor={template.id} className="form-label">
              {template.title}
            </label>
            <input
              id={template.id}
              type="number"
              name={template.title}
              placeholder={template.title}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        );

      case "document":
        return (
          <div key={template.id} className="mb-3">
            <label htmlFor={template.id} className="form-label">
              {template.title}
            </label>
            <input
              id={template.id}
              type="text"
              name={template.title}
              placeholder={template.title}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        );

      case "boolean":
        return (
          <div key={template.id} className="form-check mb-3">
            <input
              id={template.id}
              type="checkbox"
              name={template.title}
              className="form-check-input"
              onChange={handleChange}
            />
            <label htmlFor={template.id} className="form-check-label ms-2">
              {template.title}
            </label>
          </div>
        );

      default:
        return null;
    }
  });
}
