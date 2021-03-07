import React from 'react';
import "./doneListComponent.css";

const DoneListComponent = ({doneItems,quantity}) => {

  return (

    <div className="done_list">
    <h3>Done ToDo Lists-{quantity}</h3>
    
    <ol>
    {  doneItems.map(e => (

    e.isCompleted && <li>{e.value}</li>
    	
    	)
    
)}
    </ol>
    </div>
  )
}

export default DoneListComponent;