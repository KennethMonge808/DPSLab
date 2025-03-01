import React from "react";
import styles from "../page.module.css";
const MateriaList = ({ materias, inscribirMateria }) => {
  return (
    <div className={styles.section}>
      <h2>Materias Disponibles</h2>
      <div className={styles.grid}>
        {materias.map((materia) => (
          <div key={materia.id} className={styles.materiaCard}>
            <h3>{materia.nombre}</h3>
            <p>{materia.descripcion}</p>
            <p><strong>{materia.unidades} UV</strong></p>
            <button className={styles.inscribirBtn} onClick={() => inscribirMateria(materia)}>
              Inscribir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MateriaList;
