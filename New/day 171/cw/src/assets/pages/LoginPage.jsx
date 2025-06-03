import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "fake-token");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>შესვლა</button>
    </div>
  );
}
