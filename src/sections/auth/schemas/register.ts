import z from "zod";

export const registerSchema = z.object({
  displayName: z.string().min(1, "Nombre obligatorio"),
  email: z.string().email("Correo inválido"),
  password: z
    .string()
    .min(8, "Debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe tener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe tener al menos una letra minúscula"),
});
