import { estudiantes } from "../../app/lib/fakeDataBase";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  const { usuario, contrasena } = req.body;

  const estudiante = estudiantes.find(
    (e) => e.usuario === usuario && e.contrasena === contrasena
  );

  if (!estudiante) {
    return res.status(401).json({ error: "Usuario o contraseña inválidos" });
  }

  return res.status(200).json({
    nombreCompleto: estudiante.nombreCompleto,
    libroFavorito: estudiante.libroFavorito
  });
}