import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { Grid } from "@mui/material";

const CreateEmpresa = () => {
  return (
    <Create>
      <SimpleForm>
        <Grid
          container
          spacing={8}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={5}>
            <TextInput source="gestor" label="GESTOR" fullWidth></TextInput>
          </Grid>

          <Grid item xs={5}>
            <TextInput source="nit_rut" label="NIT RUT" fullWidth></TextInput>
          </Grid>

          <Grid item xs={5}>
            <TextInput
              source="nombre_comercial_del_negocio"
              label="NOMBRE COMERCIAL"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={5}>
            <TextInput source="contacto" label="CONTACTO" fullWidth></TextInput>
          </Grid>
          <Grid item xs={5}>
            <TextInput
              source="correo_electronico"
              label="CORREO ELECTRONICO"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={5}>
            <TextInput source="ciudad" label="CIUDAD" fullWidth></TextInput>
          </Grid>
          <Grid item xs={5}>
            <TextInput
              source="nombre_empresario"
              label="NOMBRE EMPRESARIO"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={5}>
            <TextInput
              source="direccion"
              label="DIRECCION"
              fullWidth
            ></TextInput>
          </Grid>

          <Grid item xs={5}>
            <TextInput
              source="doc_identidad"
              label="DOC IDENTIDAD"
              fullWidth
            ></TextInput>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateEmpresa;
