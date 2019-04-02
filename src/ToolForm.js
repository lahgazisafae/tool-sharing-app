import React from 'react';

const ToolForm = (props) => {

    return(
        <div>
        <h2> Add a New Tool!</h2>
        <form onSubmit={props.handleSubmit}>
        <label>
        Tool Name:
        <input name="name" type="text" />
        </label>
        <label>
        Lender Name: 
        <input name="lender_name" type="text"  />
        </label>
        <label>
        <br></br>
        Instructions:
        <input name="instructions" type="text"  />
        </label>
        <br></br>
        <label>
        Image:
        <input name="image" type="text"   />
        </label>
        <label>
        <br></br>
        Contact:
        <input name="contact" type="text" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
        </form>  
        </div>
    )
}

export default ToolForm;