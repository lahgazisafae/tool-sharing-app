import React, { Component } from 'react';
import ToolList from './ToolList';
import {tools} from './resources/tools.js'
import ToolsSaved from './ToolsSaved'
import ToolForm from './ToolForm';
import SearchForm from './SearchForm'

import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
        tools: tools,
        tools_results: tools,
        name: "Live. Laugh. Fail Fast."
    }
}

handleSave= (id)=> {

    let newToolArray = this.state.tools.map((tool)=> {
      
      if (id === tool.id){
          tool.saved = !tool.saved 
          return tool}
      else 
        return tool
    })
      
    this.setState({
      tools: newToolArray
    }, ()=> console.log("What is state now!", this.state))

}

  handleSubmit = (e)=>{

    e.preventDefault()
    console.log("target", e.target.name)
    let newTool = {
      "name": e.target.name.value,
      "lender_name": e.target.lender_name.value,
      "instructions": e.target.instructions.value,
      "image": e.target.image.value,
      "contact": e.target.contact.value,
      "saved": false
    }

    let newToolArray = this.state.tools.slice()
    
    newToolArray.push(newTool)
    
    this.setState({
      tools:newToolArray
    })
    e.target.reset()

  }

  handleChange = (e)=>{

    console.log("search was fired", e.target.value)
    //filter through our tools array
    //condition that the search term matches the name of the tool
    let filteredArray = this.state.tools.filter((tool)=> {
      
      if(tool.name.toLowerCase().includes(e.target.value))
        return true
    })


    console.log("Search Results", filteredArray)

    this.setState({
      tools_results: filteredArray
    })
  }

  render() {
    let savedArray = []
    let toolsArray = []

    this.state.tools.map((tool)=> {

      if(tool.saved)
        savedArray.push(tool)
      else
        toolsArray.push(tool)
    })
    return (
      //map over the tools and 
      //pass saved tools to SavedTools
      //pass regular tools to ToolList
      <div>
      <h1> Tool Sharing App</h1>
      <div> {this.state.name} </div>
      <SearchForm handleChange = {this.handleChange} /> 
      <div class="ui three column doubling stackable grid container">
          <div class="column">
          <ToolList tools={this.state.tools_results} handleSave= {this.handleSave}/>
          </div>
          <div class="column">
          <ToolsSaved tools={savedArray} handleSave= {this.handleSave}/>
          </div>
          <div class="column">
          <ToolForm handleSubmit = {this.handleSubmit}/>
          </div>
      </div>
      
      
      </div>
    );
  }
}

export default App;
