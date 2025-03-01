import React from "react";
import styles from "../page.module.css";
const ResumenInscripcion = ({ materiasInscritas, eliminarMateria, limpiarInscripcion }) => {
  const totalUnidades = materiasInscritas.reduce((acc, materia) => acc + materia.unidades, 0);
  return (
    <div className={styles.section}>
      <h2>Materias Inscritas</h2>
      {materiasInscritas.length === 0 ? (
        <p className={styles.noMaterias}>No hay materias inscritas</p>
      ) : (
        <ul className={styles.listaMaterias}>
          {materiasInscritas.map((materia) => (
            <li key={materia.id} className={styles.materiaItem}>
              <strong>{materia.nombre}</strong> - {materia.unidades} UV
              <button className={styles.eliminarBtn} onClick={() => eliminarMateria(materia.id)}>
                Cancelar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className={styles.totalUV}><strong>Total UV:</strong> {totalUnidades}</p>
      <button className={styles.limpiarBtn} onClick={limpiarInscripcion} disabled={materiasInscritas.length === 0}>
        Limpiar Todo
      </button>
    </div>
  );
};
export default ResumenInscripcion;
