import React from "react"

const Pizza = (props) => {
  const { p, edit } = props
  return(
    <tr>
      <td>{p.topping}</td>
      <td>{p.size}</td>
      <td>{p.vegetarian === true ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => edit(p)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
