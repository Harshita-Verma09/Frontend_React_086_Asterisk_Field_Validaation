// EmailPasswordForm.tsx
import React, { useState } from "react";

export default function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  
  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`Email: ${email}\nPassword: ${password}`);
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  const getStarColor = (field: "email" | "password", value: string) => {
    if (errors[field]) return "red"; // error ho to red
    if (value.trim()) return "green"; // filled ho to green
    return "#a29999ff"; // default grey
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1e1e1e",
          padding: 20,
          borderRadius: 8,
          boxShadow: "0 0 15px rgba(255,255,255,0.1)",
          width: 300,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* Email Field */}
        <label>
          Email{" "}
          <span style={{ color: getStarColor("email", email) }}>*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 8,
            border: "1px solid #444",
            borderRadius: 4,
            background: "#222",
            color: "#fff",
          }}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: 12 }}>{errors.email}</span>
        )}

        {/* Password Field */}
        <label>
          Password{" "}
          <span style={{ color: getStarColor("password", password) }}>*</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 8,
            border: "1px solid #444",
            borderRadius: 4,
            background: "#262626",
            color: "#fff",
          }}
        />
        {errors.password && (
          <span style={{ color: "red", fontSize: 12 }}>{errors.password}</span>
        )}

        <button
          type="submit"
          style={{
            padding: 8,
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
