import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {

    const { pizzas, edit } = this.props

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          { pizzas.map((p,i) => <Pizza key={i} p={p} edit={edit}/>) }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
