import React, { useState }from 'react'

function Form(props) {
    const [Search, setSearch] = useState(" ")
      

   const  handleSubmit = (e) => {
        e.preventDefault();
        console.log("working!!!")
        console.log(Search)
        props.getVenue(Search)
    }
    
    return (
        <div>
                <form className = "search_input" onSubmit = { handleSubmit }>  
                <input onChange={(e) => setSearch(e.target.value)}
                    type = "search" 
                    name = "Search" 
                    placeholder = "Search" 
                    id = "searchInput"
                    /> 
                </form>
                
            </div>
    )
}

export default Form
