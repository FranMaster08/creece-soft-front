import * as React from "react";
import { Admin, Resource } from "react-admin";
import dataSimpleRest from "ra-data-simple-rest";
import EmpresasList from "./components/empresa/EmpresasList";
import CreateEmpresa from "./components/empresa/CreateEmpresa";
import EditEmpresa from "./components/empresa/EditEmpresa";
import ListConsultor from "./components/consultor/ListConsultor";
import CreateConsultor from "./components/consultor/CreateConsultor";
import EditConsultor from "./components/consultor/EditConsultor";

const dataProvider = dataSimpleRest("http://localhost:3000");

const App = () => (
  <>
    <Admin dataProvider={dataProvider}>
      <Resource
        name="empresa"
        list={EmpresasList}
        create={CreateEmpresa}
        edit={EditEmpresa}
      />
      <Resource
        name="consultor"
        list={ListConsultor}
        create={CreateConsultor}
        edit={EditConsultor}
      />
      <Resource
        name="laboratorio"
        list={ListConsultor}
        create={CreateConsultor}
        edit={EditConsultor}
      />
    </Admin>
  </>
);

export default App;
