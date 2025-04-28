'use client';

import { useUser } from "../../context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BienvenidaPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        ¡Bienvenido, {user.nombreCompleto}!
      </h1>
      <p className="text-lg text-center">Disfruta de tu libro favorito: <strong>{user.libroFavorito}</strong></p>
    </div>
  );
}