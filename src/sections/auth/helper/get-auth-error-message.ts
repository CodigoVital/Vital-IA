import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const getAuthErrorMessage = (
  error: FetchBaseQueryError | SerializedError
): string => {
  if ("status" in error) {
    if (error.status === 400) return "Correo o contraseña incorrectos";
    if (error.status === 404) return "Usuario no registrado";
    return `Error del servidor (${error.status})`;
  }
  if ("message" in error && error.message) {
    return error.message;
  }
  return "Ocurrió un error inesperado";
};
export default getAuthErrorMessage;
