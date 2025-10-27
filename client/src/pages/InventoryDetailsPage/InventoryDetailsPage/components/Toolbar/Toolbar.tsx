import ToolbarButton from "./ToolbarButton";
import { useState } from "react";
import "./Toolbar.css";
import AddItemForm from "../AddItemForm/AddItemForm";
import { isLoggedIn } from "../../../../../helpers/auth";
import { isOwner } from "../../../../../helpers/auth";
const Toolbar = ({
  onCreated,
  deleteSelected,
  disableDelete,
  loadItems,
  ownerId,
}) => {
  const [showForm, setShowForm] = useState(false);

  if (!isLoggedIn()) return null;
  if (!isOwner(ownerId)) return null;

  return (
    <>
      <nav className="toolbar-container">
        <div className="btn-toolbar-left">
          <ToolbarButton
            onClick={async () => {
              setShowForm(true);
            }}
            label="New Item"
            variant="btn btn-success"
            disabled={!isOwner(ownerId)}
            
          />
          <ToolbarButton
            onClick={deleteSelected}
            label="Delete items"
            variant="btn btn-danger"
            disabled={disableDelete}
          />
        </div>
      </nav>

      {showForm && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowForm(false)}
          ></div>

          <div
            className="modal d-block"
            tabIndex={-1}
            onClick={() => setShowForm(false)}
          >
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Item</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowForm(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <AddItemForm
                    onCreated={onCreated}
                    onClose={() => setShowForm(false)}
                    loadItems={loadItems}
                  />
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
