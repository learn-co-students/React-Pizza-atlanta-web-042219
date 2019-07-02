import React from "react"


const PizzaForm = (props) => {
  return(
      <div className="form-row">
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
            <input onChange={(e)=> props.updateNewPizza('vegetarian', e.target.value==='true')} className="form-check-input" type="radio" value="true" checked={props.pizza.vegetarian === null ? false : props.pizza.vegetarian}/>
            <label className="form-check-label">Vegetarian</label>
          </div>

          <div className="form-check">
            <input onChange={(e)=> props.updateNewPizza('vegetarian', e.target.value==='true')} className="form-check-input" type="radio" value="false" checked={props.pizza.vegetarian === null ? false : !props.pizza.vegetarian}/>
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>

        <div className="col">
          <button className="btn btn-success" onClick={props.submitPizza}>Submit</button>
          <br/><br/>
          <button className="btn btn-danger" onClick={props.clearPizza}>Clear</button>
        </div>
      </div>
  )
}

export default PizzaForm
