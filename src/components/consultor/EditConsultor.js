import React from "react";
import { Edit, SimpleForm, TextInput, Toolbar, SaveButton } from "react-admin";
import { Grid } from "@mui/material";

export const MyToolbar = () => (
  <Toolbar>
    <SaveButton label="Save" />
  </Toolbar>
);

const EditConsultor = (props) => {
  return (
    <Edit title="Editar Empresa" {...props}>
      <SimpleForm toolbar={<MyToolbar />}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextInput source="id"></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="nombre"></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="apellido"></TextInput>
          </Grid>

          <Grid item xs={6}>
            <TextInput source="direccion"></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="telefono"></TextInput>
          </Grid>
          <Grid item xs={6}>
            <TextInput source="cedula"></TextInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditConsultor;
