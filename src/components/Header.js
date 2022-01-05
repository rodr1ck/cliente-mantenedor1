import React, { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="rightSide">
        <h3>Mis Tareas - Mantenedor1</h3>
      </div>
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/" style={{padding: '2%'}}>Home</a>
          <a href="/creatarea" style={{padding: '2%'}}>Nueva Tarea</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
