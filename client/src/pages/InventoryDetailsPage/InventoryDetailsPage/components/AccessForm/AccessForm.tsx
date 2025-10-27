import AccessSelector from "./components/AccessSelector";
import SubmitButton from "./components/SubmitButton";
import UserSelector from "./components/UserSelector";
import "./AccessForm.css";

const AccessForm = () => {
  return (
    <div className="access-form-container">
      <div className="access-id-row">
        <div className="col-md-3">
          <UserSelector />
        </div>

        <div className="col-md-8">
          <AccessSelector />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary btn-lg w-100 mb-4"
      >
        Add new user
      </button>

      <SubmitButton />
    </div>
  );
};

export default AccessForm;
