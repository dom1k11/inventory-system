import ToolbarButton from "./ToolbarButton";
import { useParams } from "react-router-dom";
import "./Toolbar.css";

const Toolbar = () => {
  const { id } = useParams();

  return (
    <nav className="toolbar-container">
      <div className="btn-toolbar-left">
        <ToolbarButton
          onClick={async () => {}}
          label="New Inventory"
          variant="btn btn-success"
          disabled={true}
        />
        <ToolbarButton
          onClick={() => {}}
          label="Delete Inventory "
          variant="btn btn-danger"
          disabled={true}
        />
      </div>
    </nav>
  );
};

export default Toolbar;
