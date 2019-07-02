import React from "react"

const PizzaForm = (props) => {

  const { p, update, submitPizza } = props

  return(
      <div className="form-row" onChange={(e) => update(e)}>
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" defaultValue={p.topping} name="topping"/>
        </div>
        <div className="col">
          <select defaultValue={p.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value={true} defaultChecked={p.vegetarian === true && p.vegetarian === '' ? true : false} name="vegetarian"/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={false} defaultChecked={p.vegetarian === true && p.vegetarian === '' ? true : false} name="vegetarian"/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
