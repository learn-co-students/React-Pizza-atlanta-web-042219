import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       pizza : [],
       editPizza: {
         id: '',
         topping: '',
         size: 'Small',
         vegetarian: false
       }
    }
  }
  

  componentDidMount(){

    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => 
      this.setState({
        pizza : data
      })
    )
  }

  handleClick =(pizza) => {

    this.setState({ editPizza: pizza})
    
  }

  handleChange =(key, value) => {

    this.setState({
      editPizza: {...this.state.editPizza, [key]: value}
    })
  }

  handleSubmit=()=> {
    console.log(this.state.editPizza)
    // let pizzaWithEdits = this.state.pizzas.map(pizza => {
    //   if (pizza.id === pizzaObject.id) {return pizzaObject
    //   else return pizza}
    // })

    fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
      body: JSON.stringify(this.state.editPizza)
    })
    .then(resp => resp.json())
    .then(resp => {
      let pizzaObject = this.state.pizza.map(p=> p.id !== resp.id ?  p : resp)
      this.setState({pizza: pizzaObject})
    })
  }
  //   // e.preventDefault()
  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editForm={this.state.editPizza} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <PizzaList allPizza={this.state.pizza} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
