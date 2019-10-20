import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from "./components/Main";
import { store } from "./store";

ReactDOM.render(
  <Main />,
  document.getElementById("app")
);

//console.log("hello world");
//console.log(store.getState());