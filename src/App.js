import * as React from "react";
import { Admin, Resource } from "react-admin";
import dataSimpleRest from "ra-data-simple-rest";
import  EmpresasList  from "./components/EmpresasList";
import  CreateEmpresa  from "./components/CreateEmpresa";
import  EditEmpresa  from "./components/EditEmpresa";

const dataProvider = dataSimpleRest("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="empresa" list={EmpresasList}
              create={CreateEmpresa}
              edit={EditEmpresa}/>
  </Admin>
);

export default App;
