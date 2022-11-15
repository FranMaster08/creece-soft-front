// import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput label="Search" source="id" alwaysOn />,
  <TextInput label="Ciudad" source="ciudad" defaultValue="Barranquilla" />,
];
const ListConsultor = (props) => {
  return (
    <List {...props} filters={postFilters}>
      <Datagrid>
        <TextField source="id"></TextField>

        <TextField source="nombre"></TextField>

        <TextField source="apellido"></TextField>

        <TextField source="direccion"></TextField>

        <TextField source="telefono"></TextField>

        <TextField source="cedula"></TextField>
        <EditButton basePath="/empresa"></EditButton>
        <DeleteButton basePath="/empresa"></DeleteButton>
      </Datagrid>
    </List>
  );
};

export default ListConsultor;
