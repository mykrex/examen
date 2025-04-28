'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/userContext";

export default function FormularioLogin() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Error desconocido");
        return;
      }

      setUser({
        nombreCompleto: result.nombreCompleto,
        libroFavorito: result.libroFavorito
      });

      router.push("/bienvenida");
    } catch (err) {
      console.error(err);
      setError("Hubo un problema al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        className="p-2 border rounded"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Iniciar sesión
      </button>
    </form>
  );
}