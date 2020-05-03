import React from 'react';
import ReactDOM from 'react-dom';
import Detail from "../components/Detail";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Detail></Detail>, div)
})