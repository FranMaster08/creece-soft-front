import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import dataSimpleRest from "ra-data-simple-rest";

const dataProvider = dataSimpleRest("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="empresa" list={ListGuesser} />
  </Admin>
);

export default App;
