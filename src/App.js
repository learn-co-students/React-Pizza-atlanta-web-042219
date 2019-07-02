import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
constructor(){
  super()
  this.state = {
    pizzas: [],
    pizzaToEdit: {
      id: null,
      topping: null,
      size: null,
      vegetarian: null
    }
  }
}

componentDidMount= () => {
  fetch('http://localhost:3000/pizzas')
  .then(res => res.json())
  .then(data => this.setState({pizzas: data}))
}

handleEdit= (e, pizzaObject) => {
  this.setState({pizzaToEdit: pizzaObject})
}

handleToppingSelect = (e) => {
  let newZaTopping = e.target.value
  this.setState({pizzaToEdit: {...this.state.pizzaToEdit,
    topping: newZaTopping}
  })
}

handleSizeSelect = (e) => {
  let newZaSize = e.target.value
  this.setState({pizzaToEdit: {...this.state.pizzaToEdit,
    size: newZaSize}
  })
}


handleVegSelect = (e) => {
  let newZaVeg = e.target.value
  this.setState({pizzaToEdit: {...this.state.pizzaToEdit,
    vegetarian: newZaVeg}
  })
}

handleSubmit = (e) => {
      let newPizza = this.state.pizzaToEdit

      fetch('http://localhost:3000/pizzas/' + newPizza.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accepts: 'application/json'
        },
        body: JSON.stringify(newPizza),

    }).then(res => res.json())
      .then(data => {
			let newPizzaArray = [...this.state.pizzas.filter(pizza => pizza.id !== data.id), data]
			this.setState({ pizzas: newPizzaArray })
		})
	}

  render() {
    // console.log(this.state.pizzas)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit} handleSubmit={this.handleSubmit} handleToppingSelect={this.handleToppingSelect} handleSizeSelect={this.handleSizeSelect} handleVegSelect={this.handleVegSelect}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
