import ToolbarButton from "./ToolbarButton";
import "./Toolbar.css";
import { isLoggedIn } from "../../../../../../../helpers/auth";
import { isOwner } from "../../../../../../../helpers/auth";
const Toolbar = ({ deleteSelected, disableDelete, ownerId }) => {
  if (!isLoggedIn()) return null;
  if (!isOwner(ownerId)) return null;

  return (
    <>
      <nav className="toolbar-container">
        <div className="btn-toolbar-left">
          <ToolbarButton
            onClick={deleteSelected}
            label="Remove Access"
            variant="btn btn-danger"
            disabled={disableDelete}
          />
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
