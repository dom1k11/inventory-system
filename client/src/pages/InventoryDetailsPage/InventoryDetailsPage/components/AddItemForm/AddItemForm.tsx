import { useEffect, useState } from "react";
import { getFieldTemplates } from "../../../../../api/items";
import { createItem } from "../../../../../api/items";
import { useParams } from "react-router-dom";
import { buildForm } from "./helpers/buildForm";
import { validateForm } from "../../../../../utils/validation/validateForm";
import { itemSchema } from "../../../../../utils/validation/itemSchemas";
import { normalizeErrors } from "../../../../../utils/validation/normalizeErrors";
const AddItemForm = ({ onCreated, onClose, loadItems }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
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
    const { valid, errors, data } = validateForm(itemSchema, { fields: getValues() });
    if (!valid) {
      const normalizedErrors = normalizeErrors(errors, fieldTemplates);
      setErrors(normalizedErrors);
      return;
    }

    try {
      await createItem(Number(id), data.fields);
      if (onCreated) await onCreated();
      loadItems();
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        if (onClose) onClose();
      }, 1000);
    } catch (err) {
      setErrors({ general: ["❌ Failed to add items"] });
    }
  }

  if (loading) {
    return <p>Loading fields...</p>;
  }
  return (
    <>
      <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
        {buildForm(fieldTemplates, handleChange, errors)}
        {
          //IMPORTANT NOTE: Could just add required to fields than playing with that zod validation
        }
        <button
          type="submit"
          className={`btn w-100 ${isSubmitted ? "btn-outline-success" : "btn-success"}`}
          disabled={isSubmitted}
        >
          {isSubmitted ? "Created ✓" : "Create Item"}
        </button>
        {errors.general && <p className="text-danger small mt-2">{errors.general[0]}</p>}
      </form>
    </>
  );
};

export default AddItemForm;
