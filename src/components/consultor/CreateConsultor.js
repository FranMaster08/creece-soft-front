import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { Grid } from "@mui/material";

const CreateConsultor = () => {
  return (
    <Create>
      <SimpleForm>
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextInput fullWidth source="nombre"></TextInput>
            </Grid>
            <Grid item xs={6}>
              <TextInput fullWidth source="apellido"></TextInput>
            </Grid>

            <Grid item xs={6}>
              <TextInput fullWidth source="direccion"></TextInput>
            </Grid>
            <Grid item xs={6}>
              <TextInput fullWidth source="telefono"></TextInput>
            </Grid>
            <Grid item xs={6}>
              <TextInput fullWidth source="cedula"></TextInput>
            </Grid>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateConsultor;
