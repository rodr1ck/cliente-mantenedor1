import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Collapse,
    Button,
    ButtonProps,
    Link
  } from "@material-ui/core";
  //import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles({
    root: {
      backgroundColor: "#2f4554",
      margin: "8px 0",
      color: "white",
      "&:hover": {
        backgroundColor: "#253642"
      },
      "&:disabled": {
        backgroundColor: "gray"
      }
    }
  });

const Nuevatarea = () => {

    const [alert, setAlert] = React.useState({
        open: false,
        message: "",
        severity: "success"
      });
    const classes = useStyles();
    let navigate = useNavigate();
    const handleOpenAlert = (mensaje, tipo) => {
        setAlert({ open: true, message: mensaje, severity: tipo });
      };
    const [descripcion, setDescripcion] = useState("");
    const [vigente, setVigente] = useState(false);

    const [errorsDescripcion, setErrorsDescripcion] = useState();
 
    const avatarStyle = { backgroundColor: "#2f4554" };
    const paperStyle = {
        padding: 20,
        width: 280,
        margin: "20px auto"
      };

    const handleDescripcionChange = (event) => {
        const {
          target: { value }
        } = event;
        setErrorsDescripcion({ descripcion: "" });
        setDescripcion(value);
    
        let reg = new RegExp(
            /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/
        ).test(value);
    
        if (!reg) {
          setErrorsDescripcion({ email: "Formato de descripcion incorrecta" });
        }
      };

      const handleVigenteChange = (event) => {
        setVigente(event.target.value);
      };

      const onSubmit = async (event) => {
        event.preventDefault();
        console.log("Guardando tarea");
        handleOpenAlert("Registro exitoso", "success");
        setDescripcion("");
        setVigente(false);
      }

      const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setAlert({ open: false, message: alert.message, severity: alert.severity });
      };

    return (
        <div>
                      <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  {/* <AddCircleIcon /> */}
                </Avatar>
                <h2>Registrar una nueva tarea</h2>
              </Grid>
              <TextField
                value={descripcion}
                onChange={handleDescripcionChange}
                inputProps={{ maxLength: 35 }}
                label="Descripcion"
                placeholder="Ingresar descripcion"
                type="text"
                fullWidth
                required
                error={Boolean(errorsDescripcion?.descripcion)}
                helperText={errorsDescripcion?.descripcion}
                
              />
            

              <Box sx={{ minWidth: 120 }} style={{ marginTop: "15px" }}>
                <FormControl required fullWidth>
                  <InputLabel id="rol-select-label">Vigente</InputLabel>
                  <Select
                    labelId="rol-select-label"
                    id="vigente-select"
                    value={vigente}
                    label="Vigente"
                    onChange={handleVigenteChange}
                  >
                    <MenuItem value={"true"}>True</MenuItem>
                    <MenuItem value={"false"}>False</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Collapse in={descripcion?.length > 0}>
                <Button
                  type="submit"
                  variant="contained"
                  /* style={btnstyle} */
                  fullWidth
                  onClick={onSubmit}
                  /* disabled={errorsTelefono?.telefono?.length > 0} */
                  disabled={
                    errorsDescripcion?.email?.length > 0 ||
                    descripcion == undefined ||
                    vigente == undefined
                  }
                  className={classes.root}
                >
                  Crear Tarea
                </Button>
              </Collapse>
            </Paper>
          </Grid>
          <Snackbar
            open={alert.open}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              variant="filled"
              onClose={handleCloseAlert}
              severity={alert.severity}
              sx={{ width: "100%" }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        </div>
    );
}

export default Nuevatarea;
