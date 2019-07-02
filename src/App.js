import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    edit: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(res => this.setState({pizzas: res}))
  }

  editPizza = (p) => {
    this.setState({
      edit: p
    })
  }

  updatePizza = (e) => {

    this.setState({
      ...this.state,
      edit: {
        ...this.state.edit,
        [e.target.name]: e.target.value
      }
    })

  }


  submitPizza = () => {

    let newPizza = this.state.edit

    let updated = [...this.state.pizzas.map(p => p.id === newPizza.id ? newPizza : p)]

    this.setState({
      pizzas: updated
    }, () => console.log("New state: ", this.state))
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm p={this.state.edit} update={this.updatePizza} submitPizza={this.submitPizza}/>
        <PizzaList pizzas={this.state.pizzas} edit={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
