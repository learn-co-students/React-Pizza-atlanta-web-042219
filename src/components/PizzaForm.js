import React from "react"

const PizzaForm = (props) => {
  // console.log(props.pizzaToEdit)
  let topping = props.pizzaToEdit.topping
  let size = props.pizzaToEdit.size
  let clicked = props.pizzaToEdit.vegetarian


  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder={topping} onChange={(e) => props.handleToppingSelect(e)} value={
              topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={props.handleSizeSelect}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.handleVegSelect} className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaToEdit.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.handleVegSelect} className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizzaToEdit.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
