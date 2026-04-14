function Header({ totalPendientes }) {
  return (
    <header>
      <h1>Gestor de Tareas</h1>
      <p>Tareas pendientes: {totalPendientes}</p>
    </header>
  );
}

export default Header;