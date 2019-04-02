import React from 'react';
import ToolCard from './ToolCard';

const ToolList= (props)=> {

    //go over props
    //render a ToolCard for each in array
      
        return (
        <div>
            <h2> Tools List</h2>

           {props.tools.map((toolElement)=> <ToolCard tool={toolElement} handleClick={props.handleSave}/> 
            )}
        </div>

        )



}

export default ToolList;