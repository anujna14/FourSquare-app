
import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             searchInput: " " 
         }
     }
     
     handleInput = (event)=>{
         this.setState({
             searchInput: event.target.value
         })
         //console.log(this.state.searchInput)
     }

     handleSubmit = (e) => {
         e.preventDefault()
            console.log("working!!!")
            console.log(this.state.searchInput)
           this.props.getVenue(this.state.searchInput)
     }
          
    render() {
        //console.log("%%%%%")
       // console.log(this.state.searchInput)
        return (
            <div>
                <form className = "search_input" onSubmit = {this.handleSubmit}>  
                <input onChange={this.handleInput}
                    type = "search" 
                    name = "searchInput" 
                    placeholder = "Search" 
                    id = "searchInput"
                    /> 
                </form>
                
            </div>
          
        )
    }
}

export default Form;







