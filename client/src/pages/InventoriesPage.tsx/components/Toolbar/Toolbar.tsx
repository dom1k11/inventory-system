import { useState } from "react";
import ToolbarButton from "./ToolbarButton";
import AddInventoryForm from "../AddInventoryForm/AddInventoryForm";
import "./Toolbar.css";
import { isLoggedIn } from "../../../../helpers/auth";

const Toolbar = ({ onCreated, deleteSelected, disableDelete }) => {
  const [showForm, setShowForm] = useState(false);
  if (!isLoggedIn()) return null;

  return (
    <>
      <nav className="toolbar-container">
        <div className="btn-toolbar-left">
          <ToolbarButton
            onClick={() => setShowForm(true)}
            label="New Inventory"
            variant="btn btn-success"
            disabled={false}
          />

          <ToolbarButton
            onClick={deleteSelected}
            label="Delete Inventory"
            variant="btn btn-danger"
            disabled={disableDelete}
          />
        </div>
      </nav>

      {showForm && (
        <>
          <div className="modal-backdrop fade show" onClick={() => setShowForm(false)}></div>

          <div className="modal d-block" tabIndex={-1} onClick={() => setShowForm(false)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Inventory</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowForm(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <AddInventoryForm onCreated={onCreated} onClose={() => setShowForm(false)} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Toolbar;
