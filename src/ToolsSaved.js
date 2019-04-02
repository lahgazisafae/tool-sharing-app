import React from 'react';
import ToolCard from './ToolCard';

const ToolsSaved = (props) => {

      
        return (
        <div>
            <h2> Saved Tools </h2>
           {props.tools.map((toolElement)=> <ToolCard tool={toolElement} handleClick={props.handleSave}/> 
            )}
        </div>

        )


}

export default ToolsSaved;