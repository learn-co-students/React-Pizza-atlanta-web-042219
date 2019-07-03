import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const pizzaURL = "http://localhost:3000/pizzas"

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      thisPizza: []
    }
  }
  componentDidMount(){
      fetch(pizzaURL)
      .then(res => res.json())
      .then(res => this.setState({pizzas: res}))
  }

  handleEdit = (pizza) => {
    this.setState({thisPizza: pizza})
  }

  handleSubmit = (pizza) => {
    const thisThisPizza = this.state.pizzas.map((p) => {
      if (p.id === pizza.id){ return pizza}
      else {return p}

    })
    console.log(thisThisPizza)
    this.setState({pizzas: thisThisPizza})
    fetch(`${pizzaURL}/${pizza.id}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
      },
      body: JSON.stringify(pizza)
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm thisPizza={this.state.thisPizza} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
