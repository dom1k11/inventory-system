import { useState } from "react";

const SalesforceForm = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    position: "Player",
    phone: "+37012345678",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div className="modal d-block" tabIndex={-1} onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connect to Salesforce</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <form
                className="p-4 border rounded bg-light"
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onSubmit) {
                    onSubmit(formData);
                  }
                  onClose();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="off"
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
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="off"
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
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Position / Role
                  </label>
                  <input
                    id="position"
                    type="text"
                    className="form-control"
                    placeholder="Product Manager"
                    value={formData.position}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    placeholder="+370 600 12345"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
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
