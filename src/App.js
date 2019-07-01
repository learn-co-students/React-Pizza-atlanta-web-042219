import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      pizzaToEdit: []
    }
  }

  componentDidMount() {
    this.fetchPizza()
  }

  fetchPizza() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  handleEditPizza = (pizzaObject) => {
    console.log('handleEditPizza', pizzaObject)
    this.setState({pizzaToEdit: pizzaObject})
  }

  handleChange = (event) => {
    console.log(event.target.value ,event.target.value==='false')

    if (event.target.value === 'true') return event.target.value = true
    else event.target.value = false
    
    this.setState({
      pizzaToEdit: {...this.state.pizzaToEdit,
        [event.target.name]: event.target.value}
    })
  }

  handleSubmit = (pizzaObject) => {
    console.log('handleSubmit', pizzaObject)

    let pizzaWithEdits = this.state.pizzas.map(pizza => {
      if (pizza.id === pizzaObject.id) return pizzaObject
      else return pizza
    })

    this.setState({pizzas: pizzaWithEdits})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handleSubmit={this.handleSubmit} 
          pizzaToEdit={this.state.pizzaToEdit}
          handleChange={this.handleChange}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditPizza={this.handleEditPizza}
        />
      </Fragment>
    )
  }
}

export default App;
