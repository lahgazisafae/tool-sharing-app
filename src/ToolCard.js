import React from 'react';


const ToolCard = (props) => {

        return(
            <div>
            <div className="ui card">
                <div className="image">
                <img className= "ui small image" src={props.tool.image}/>
                </div>
            <div className="content">
                <a className="header">{props.tool.name}</a>
                <div className="meta">
                <span className="date">{props.tool.lender_name}</span>
                </div>
                <div className="description">{props.tool.instructions}
                </div>
            </div>
            <div className="extra content">
           
            <button onClick= {(e) => props.handleClick(props.tool.id)} className="ui primary basic button">{props.tool.saved ? "DELETE": "SAVE"}</button>
            </div>
            </div>
            </div>


        );

}

export default ToolCard;