import React from "react"

const PizzaForm = (props) => {

  // const handleSubmit =(editPizza) => {
  //   console.log(editPizza)
  //   fetch(`http://localhost:3000/pizzas/`,{
  //     method: 'PATCH', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //   },  
  //   body: JSON.stringify(editPizza
  
  
  //   ),
  //   })
  // }
  return(
  <div className="form-row">
    <div className="col-5">
        <input type="text" className="form-control" onChange={(e) => props.handleChange('topping', e.target.value)} placeholder="Pizza Topping" value={
            //Pizza Topping Should Go Here
            props.editForm.topping 
          
          }/>
    </div>
    <div className="col">
      <select value={props.editForm.size} className="form-control" onChange={(e) => props.handleChange('size', e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
    <div className="col">
      <div className="form-check">
        <input className="form-check-input" type="radio" value="Vegetarian" onChange={(e) => props.handleChange('vegetarian', true)} checked={props.editForm.vegetarian}/>
        <label className="form-check-label">
          Vegetarian
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={(e) => props.handleChange('vegetarian', false)} checked={!props.editForm.vegetarian}
        />
        <label className="form-check-label">
          Not Vegetarian
        </label>
      </div>
    </div>
    <div className="col">
      <button type="submit" className="btn btn-success" onClick={(e) => props.handleSubmit(props.editPizza)} >Submit</button>
    </div>
  </div>

  )
}


export default PizzaForm
