import React from "react"

const Pizza = (props) => {
  // console.log(props.pizza)
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian}</td>
      <td><button id={props.pizza.id} type="button" className="btn btn-primary" onClick={(e) => props.handleEdit(e, props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
