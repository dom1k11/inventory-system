import { useEffect, useState } from "react";
import { getFieldTemplates } from "../../../../../api/items";
import { createItem } from "../../../../../api/items";
import { useParams } from "react-router-dom";
const AddItemForm = ({ onCreated, onClose, loadItems }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldTemplates, setFieldTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    console.log(formData);
  }

  function getValues() {
    const values = fieldTemplates.map((t) => ({
      field_template_id: t.id,
      value: formData[t.id] ?? "",
    }));
    return values;
  }

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    async function loadTemplates() {
      const templates = await getFieldTemplates(Number(id));
      setFieldTemplates(templates);
      setLoading(false);
    }
    loadTemplates();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await createItem(
      Number(id),
      1,
      //TODO: change created by
      getValues()
    );
    if (onCreated) await onCreated();
    loadItems()
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 1000);
  }

  function buildForm() {
    console.log("current field templates", fieldTemplates);
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

  if (loading) {
    return <p>Loading fields...</p>;
  }
  return (
    <>
      <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
        {buildForm()}
        <button
          type="submit"
          className={`btn w-100 ${
            isSubmitted ? "btn-outline-success" : "btn-success"
          }`}
          disabled={isSubmitted}
        >
          {isSubmitted ? "Created ✓" : "Create Item"}
        </button>
      </form>
    </>
  );
};

export default AddItemForm;
