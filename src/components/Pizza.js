import React from "react"

const Pizza = (props) => {

  console.log(props)


  return(
    <tr>
      <td>{props.eachPizza.topping}</td>
      <td>{props.eachPizza.size}</td>
      <td>{props.eachPizza.vegetarian ? "Vegetarian" : "Not-vegetarian"}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => props.handleClick(props.eachPizza)}>Edit Pizza</button></td>
    </tr>
  )
}



export default Pizza
