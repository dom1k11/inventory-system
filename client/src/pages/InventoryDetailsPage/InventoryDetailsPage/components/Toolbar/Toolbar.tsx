import ToolbarButton from "./ToolbarButton";
import { useParams } from "react-router-dom";
import { handleAdd } from "../../../../../services/itemAddHandler";
import "./Toolbar.css";

const Toolbar = ({ loadItems, deleteSelected, disableDelete }) => {
  const { id } = useParams();

  return (
    <nav className="toolbar-container">
      <div className="btn-toolbar-left">
        <ToolbarButton
          onClick={async () => {
            await handleAdd(Number(id));
            await loadItems();
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
  );
};

export default Toolbar;
