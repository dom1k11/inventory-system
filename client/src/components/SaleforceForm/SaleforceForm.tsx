import { useState, useEffect } from "react";

const SalesforceForm = ({ show, onClose, onSubmit, userEmail }) => {
  const initialState = {
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- AUTO-FILL FROM USER EMAIL ---
  useEffect(() => {
    if (userEmail) {
      const baseName = userEmail.split("@")[0];
      setFormData((prev) => ({
        ...prev,
        email: userEmail,
        companyName: `${baseName} Corp`,
      }));
    }
  }, [userEmail]);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit(formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialState);
      onClose();
    }, 1000);
  }

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} />

      <div className="modal d-block" tabIndex={-1} onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connect to Salesforce</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className="form-control"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+37060000000"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn w-100 ${isSubmitted ? "btn-outline-success" : "btn-success"}`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Synced ✓" : "Sync to Salesforce"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesforceForm;
