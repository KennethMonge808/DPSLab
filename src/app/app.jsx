import React, { useState, useEffect } from "react";
import Header from "./Header";
import MateriaList from "./MateriaList";
import ResumenInscripcion from "./ResumenInscripcion";
import materias from "./data";

const App = () => {
// useState se utiliza pel estado de las materias en el componente!.
  const [materiasInscritas, setMateriasInscritas] = useState([]);

  const inscribirMateria = (materia) => {
    if (!materiasInscritas.find((m) => m.id === materia.id)) {
      setMateriasInscritas([...materiasInscritas, materia]);
    }
  };
  useEffect
  const eliminarMateria = (id) => {
    setMateriasInscritas(materiasInscritas.filter((m) => m.id !== id));
  };
  const limpiarInscripcion = () => {
    setMateriasInscritas([]);
  };
  return (
    <div>
      <Header totalMaterias={materiasInscritas.length} />
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} />
      <ResumenInscripcion materiasInscritas={materiasInscritas} eliminarMateria={eliminarMateria} limpiarInscripcion={limpiarInscripcion} />
    </div>
  );
};
export default App;
