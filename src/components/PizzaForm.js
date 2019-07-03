import React from "react"

class PizzaForm extends React.Component{

  constructor(){
      super()
      this.state={
        pizza: {}
      }
  }

componentWillReceiveProps(){
  this.setState({pizza: this.props.thisPizza})
}


render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.pizza.topping}
            onChange={(e) => this.setState({
              pizza: {...this.state.pizza, topping: e.target.value}
              })
             }
            />
        </div>
        <div className="col">
          <select
            value={this.state.pizza.size}
            className="form-control"
            onChange={(e) => this.setState({
            pizza: {...this.state.pizza, size: e.target.value}
            })
           }
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.pizza.vegetarian}
            onChange={(e) => this.setState({
            pizza: {...this.state.pizza, vegetarian: e.target.value}
            })
           }
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.pizza.vegetarian}
            onChange={(e) => this.setState({
            pizza: {...this.state.pizza, vegetarian: e.target.value}
            })
           }
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.handleSubmit(this.state.pizza)}>Submit</button>
        </div>
      </div>

    )
  }
}

export default PizzaForm
