import { useState } from "react";
import { useAuthStore } from "@store/auth.store";
import { useNavigate, useLocation } from "react-router-dom";
import { loginService } from "@services/api/auth/loginService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginService(email, password);

      // Lưu token mock
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login success (mock)!");
      window.location.href = "/home";
    } catch (e) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col w-80 gap-4 mx-auto mt-20">
      <h1 className="text-xl font-semibold">Login (Mocked)</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
