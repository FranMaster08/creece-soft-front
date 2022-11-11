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
            <TextInput source="nit_rut" label="NIT RUT" fullWidth></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput
              source="nombre_comercial_del_negocio"
              label="NOMBRE COMERCIAL"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="contacto" label="CONTACTO" fullWidth></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput
              source="correo_electronico"
              label="CORREO ELECTRONICO"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput source="ciudad" label="CIUDAD" fullWidth></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput
              source="nombre_empresario"
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
              source="doc_identidad"
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
