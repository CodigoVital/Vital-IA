import  { useState } from 'react'

const useDiagnostico = () => {
const [sintomasSeleccionados, setSintomasSeleccionados] = useState<string[]>([]);
  const [sintomaInput, setSintomaInput] = useState("");
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Agrega un síntoma personalizado
  const agregarSintoma = () => {
    const sintoma = sintomaInput.trim();
    if (sintoma && !sintomasSeleccionados.includes(sintoma)) {
      setSintomasSeleccionados([...sintomasSeleccionados, sintoma]);
      setSintomaInput("");
      setMostrarAdvertencia(false);
    }
  };

  // Selecciona un síntoma común
  const seleccionarSintomaComun = (sintoma: string) => {
    if (!sintomasSeleccionados.includes(sintoma)) {
      setSintomasSeleccionados([...sintomasSeleccionados, sintoma]);
      setMostrarAdvertencia(false);
    }
  };

  // Elimina un síntoma de la lista
  const eliminarSintoma = (sintoma: string) => {
    setSintomasSeleccionados(sintomasSeleccionados.filter(s => s !== sintoma));
  };

  // Analiza los síntomas seleccionados
  const analizarSintomas = () => {
    if (sintomasSeleccionados.length === 0) {
      setMostrarAdvertencia(true);
      return;
    }
    setMostrarResultado(true);
  };

 
  return { sintomasSeleccionados, sintomaInput, mostrarAdvertencia, mostrarResultado, agregarSintoma, seleccionarSintomaComun, eliminarSintoma, analizarSintomas, setSintomaInput, setMostrarResultado}
}

export default useDiagnostico
