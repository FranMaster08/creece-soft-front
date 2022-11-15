import React from "react";
import { Edit, SimpleForm, TextInput, Toolbar, SaveButton } from "react-admin";
import { Grid } from "@mui/material";

export const MyToolbar = () => (
  <Toolbar>
    <SaveButton label="Save" />
  </Toolbar>
);

const EditEmpresa = (props) => {
  return (
    <Edit title="Editar Empresa" {...props}>
      <SimpleForm toolbar={<MyToolbar />}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextInput
              source="id"
              label="id"
              disabled="false"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput source="gestor" label="GESTOR" fullWidth></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput source="nitRut" label="NIT RUT" fullWidth></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput
              source="nombreComercialDelNegocio"
              label="NOMBRE COMERCIAL"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="contacto" label="CONTACTO" fullWidth></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput
              source="correoElectronico"
              label="CORREO ELECTRONICO"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput source="ciudad" label="CIUDAD" fullWidth></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput
              source="nombreEmpresario"
              label="NOMBRE EMPRESARIO"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput
              source="direccion"
              label="DIRECCION"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput
              source="docIdentidad"
              label="DOC IDENTIDAD"
              fullWidth
            ></TextInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditEmpresa;
