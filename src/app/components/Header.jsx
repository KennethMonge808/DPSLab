const Header = ({ totalMaterias }) => {
    return (
      <header style={{ textAlign: "center", padding: "20px", color: "#000" }}>
        <h1>Sistema de Inscripción</h1>
        <p>Materias inscritas: {totalMaterias}</p>
      </header>
    );
  };
  export default Header;
  