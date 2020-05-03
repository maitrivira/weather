import React from 'react';
import ReactDOM from 'react-dom';
import City from "../components/City";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<City></City>, div)
})