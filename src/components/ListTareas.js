import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const Listtareas = (props) => {
 const { loading, rows} = props;

 let newRows = [];

 if(rows.length > 0){
 var array = JSON.parse(rows);
 console.log(array)
  newRows = array.map(x => {
     const id = x.id
     const descripcion = x.descripcion
     const fechaCreacion = x.fechaCreacion
     const vigente = x.vigente
     const id_borrar = x.id
     const id_edit = x.id

     return {id, descripcion, fechaCreacion, vigente, id_borrar, id_edit}
 })
}
  
  console.log(Array.isArray(newRows))

  console.log("rows ", newRows)

  const handlePurge = (e) => {
      console.log("borrando tarea")
  };

  const handleEdit = (e) => {
    console.log("editando tarea")
};

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "descripcion",
      headerName: "Descripcion",
      width: 250,
    },
    {
      field: "fechaCreacion",
      headerName: "Fecha creacion",
      width: 250,
    },
    {
      field: "vigente",
      headerName: "Vigente",
      width: 250,
    },
    {
        field: "id_borrar",
        headerName: "Borrar Tarea",
        width: 200,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <Button
              style={{
                borderRadius: 18,
                backgroundColor: "#58b062",
                padding: "18px 36px",
              }}
              variant="contained"
              color="primary"
              onClick={handlePurge}
            >
              Borrar
            </Button>
          );
        },
      },
      {
        field: "id_edit",
        headerName: "Editar Tarea",
        width: 200,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <Button
              style={{
                borderRadius: 18,
                backgroundColor: "#58b062",
                padding: "18px 36px",
              }}
              variant="contained"
              color="primary"
              onClick={handleEdit}
            >
              Editar
            </Button>
          );
        },
      },
  ];

  return (
    !loading ? (
        <>
      <div style={{ height: 550, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={newRows}
          columns={columns}
          pageSize={40}
          rowsPerPageOptions={[40]}
          density={"compact"}
          disableSelectionOnClick
        />
      </div>
    </>
    ) : (
        "Loading..."
      )
  );
};

export default Listtareas;
