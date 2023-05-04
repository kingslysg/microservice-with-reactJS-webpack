
import { createRoot } from "react-dom/client";
import Helloworld from './pages/helloworld';
import Home from './pages/home';
import React, { useReducer, useState } from 'react';



const helloWorldRender = createRoot(document.getElementById('placeholder_6'));
helloWorldRender.render(
  <React.StrictMode>
    <Helloworld />
  </React.StrictMode>
);

