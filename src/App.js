import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ListTareas from "./components/ListTareas";
import Nuevatarea from "./components/NuevaTarea";

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/tarea", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setRows(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ListTareas rows={rows} loading={loading} />}
          />

          <Route path="/creatarea" element={<Nuevatarea />} />

          {/*             <Route path="/vertareas">
              <HistorialTarea />
            </Route> */}
          {/*             <Route path="/creartarea">
              <CreaTarea />
            </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
