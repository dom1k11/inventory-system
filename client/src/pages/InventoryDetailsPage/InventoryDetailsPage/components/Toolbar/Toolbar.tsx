import ToolbarButton from "./ToolbarButton";
import { useParams } from "react-router-dom";
import { handleAdd } from "../../../../../services/itemAddHandler";
import "./Toolbar.css";

const Toolbar = ({ loadItems }) => {
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
          onClick={async () => {
            await loadItems();
          }}
          label="Delete items"
          variant="btn btn-danger"
          disabled
        />
      </div>
    </nav>
  );
};

export default Toolbar;
