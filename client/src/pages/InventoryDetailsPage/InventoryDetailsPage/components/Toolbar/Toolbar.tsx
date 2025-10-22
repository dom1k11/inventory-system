import ToolbarButton from "./ToolbarButton";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Toolbar.css";
import AddItemForm from "../AddItemForm/AddItemForm";

const Toolbar = ({ onCreated, deleteSelected, disableDelete }) => {
  const [showForm, setShowForm] = useState(false);

  const { id } = useParams();

  return (
    <>
      <nav className="toolbar-container">
        <div className="btn-toolbar-left">
          <ToolbarButton
            onClick={async () => {
              setShowForm(true);
              // await handleAdd(Number(id));
              // await loadItems();
            }}
            label="New Item"
            variant="btn btn-success"
            disabled={false}
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
