import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../api/login";
const LoginPage = () => {
  const navigate = useNavigate();


  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(field: "email" | "password", value: string) {
    setForm({ ...form, [field]: value });
  }

  async function handleLogin() {
    setError("");
    setLoading(true);

    try {
      await login(form.email, form.password) //it@school.local | hash_it
      navigate("/inventories");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginForm
      email={form.email}
      password={form.password}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleLogin}
      onGoToRegister={() => navigate("/register")}
    />
  );
};

export default LoginPage;
