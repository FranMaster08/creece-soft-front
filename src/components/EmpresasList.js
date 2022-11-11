// import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  TextInput
} from "react-admin";



const postFilters = [
    <TextInput label="Search" source="id" alwaysOn />,
    <TextInput label="Ciudad" source="ciudad" defaultValue="Barranquilla" />,
];
const EmpresasList = (props) => {
  return (
    <List {...props} filters={postFilters} >
      <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="gestor"></TextField>
        <TextField source="nit_rut"></TextField>
        <TextField source="nombre_comercial_del_negocio"></TextField>
        <TextField source="contacto"></TextField>
        <TextField source="correo_electronico"></TextField>
        <TextField source="ciudad"></TextField>
        <TextField source="nombre_empresario"></TextField>
        <TextField source="direccion"></TextField>
        <TextField source="doc_identidad"></TextField>
        <EditButton basePath="/empresa"></EditButton>
        <DeleteButton basePath="/empresa"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default EmpresasList;


