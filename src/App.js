import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ChildComponent from "./components/ChildComponent";

  
const App = () => {

  return (
  	<div className="App">
   <ChildComponent/>
    </div>
  )
}

export default App;