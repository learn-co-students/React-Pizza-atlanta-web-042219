import React, { Component, Fragment } from 'react';
// import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API_PIZZA = 'http://localhost:3000/pizzas/'

class App extends Component {

	state = {
		allPizzas: [],
		pizza: {
			id: '',
			topping: '',
			size: 'Small',
			vegetarian: null
		}
	}

	updateNewPizza = (attr, value)=> {
		this.setState({ pizza: {
				...this.state.pizza,
				[attr]: value
			}
		})
	}

	clearPizza = (e)=> {
		this.setState({
			pizza: {
				id: '',
				topping: '',
				size: 'Small',
				vegetarian: null
			}
		})
	}

	submitPizza = (e)=> {
		let newPizza = this.state.pizza
		if(!newPizza.topping) newPizza.topping = 'Plain'

		fetch(API_PIZZA+newPizza.id, {
	    method: newPizza.id ? 'PATCH' : 'POST',
	    headers: {
	    	Accept: 'application/json',
	    	'Content-Type':'application/json'
	    },
	    body: JSON.stringify( newPizza )
	  })
		.then(resp => resp.json())
		.then(newPizza => {
			let newPizzaArray = [...this.state.allPizzas.filter(pizza => pizza.id !== newPizza.id), newPizza]
			newPizzaArray.sort((a,b) => a.id - b.id )
			this.setState({
				allPizzas: newPizzaArray,
				pizza: {
					id: '',
					topping: '',
					size: 'Small',
					vegetarian: null
				}
			})
		})
	}

	editPizzaBtn = (pizza)=> this.setState({ pizza: pizza })

	componentDidMount() {
		fetch(API_PIZZA)
		.then(resp => resp.json())
		.then(resp => this.setState({ allPizzas: resp }))
	}

  render() {
    return (
      <Fragment>
        <h1 className="text-center">Welcome to Flatiron School's Pizzeria</h1>
        <PizzaForm pizza={this.state.pizza} updateNewPizza={this.updateNewPizza} submitPizza={this.submitPizza} clearPizza={this.clearPizza} />
        <PizzaList allPizzas={this.state.allPizzas} editPizzaBtn={this.editPizzaBtn} />
      </Fragment>
    );
  }
}

export default App;
