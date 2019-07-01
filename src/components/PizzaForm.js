import React from "react"


const PizzaForm = (props) => {

  const changeRadioButtons = (e) => {
    if(e.target.value === 'Vegetarian')
      props.updateNewPizza('vegetarian', true)
    else
      props.updateNewPizza('vegetarian', false)
  }

  return(
      <div className="form-row">
        <input id="pizza-id" value={props.id} hidden />
        <div className="col-5">
          <input onChange={(e)=> props.updateNewPizza('topping', e.target.value)} type="text" className="form-control" placeholder="Pizza Topping" value={props.pizza.topping}/>
        </div>

        <div className="col">
          <select onChange={(e)=> props.updateNewPizza('size', e.target.value)} value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="col">
          <div className="form-check">
            <input onChange={changeRadioButtons} className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>

          <div className="form-check">
            <input onChange={changeRadioButtons} className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>

        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
