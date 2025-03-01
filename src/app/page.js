"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "../app/components/Header";
import MateriaList from "@/app/components/MateriaList";
import ResumenInscripcion from "@/app/components/ResumenInscripcion";
import materias from "../data/data";
const Home = () => {
  const [materiasInscritas, setMateriasInscritas] = useState([]);
  const inscribirMateria = (materia) => {
    if (!materiasInscritas.find((m) => m.id === materia.id)) {
      setMateriasInscritas([...materiasInscritas, materia]);
    }
  };
  const eliminarMateria = (id) => {
    setMateriasInscritas(materiasInscritas.filter((m) => m.id !== id));a
  };
  const limpiarInscripcion = () => {
    setMateriasInscritas([]);
  };
  return (
    <div className={styles.container}>
      <Header totalMaterias={materiasInscritas.length} />
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} />
      <ResumenInscripcion 
        materiasInscritas={materiasInscritas} 
        eliminarMateria={eliminarMateria} 
        limpiarInscripcion={limpiarInscripcion} 
      />
    </div>
  );
};
export default Home;
