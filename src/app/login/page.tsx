'use client';

import FormLogin from "../components/formLogin";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Bienvenido a NovaLearn</h1>
      <FormLogin />
    </div>
  );
}