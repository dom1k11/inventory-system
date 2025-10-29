import { useEffect, useState } from "react";
import { getFieldTemplates } from "../../../../../api/items";
import { createItem } from "../../../../../api/items";
import { useParams } from "react-router-dom";
import { buildForm } from "./helpers/buildForm";
const AddItemForm = ({ onCreated, onClose, loadItems }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldTemplates, setFieldTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
    await createItem(Number(id), getValues());
    if (onCreated) await onCreated();
    loadItems();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 1000);
  }

  if (loading) {
    return <p>Loading fields...</p>;
  }
  return (
    <>
      <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
        {buildForm(fieldTemplates, handleChange)}
        <button
          type="submit"
          className={`btn w-100 ${isSubmitted ? "btn-outline-success" : "btn-success"}`}
          disabled={isSubmitted}
        >
          {isSubmitted ? "Created ✓" : "Create Item"}
        </button>
      </form>
    </>
  );
};

export default AddItemForm;
