import React, { Component } from "react";
import Maincart from "./Maincart";

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }
  render() {
    const data = [
      {
        name: "tomato1",
        price: 55
      },
      {
        name: "tomato2",
        price: 56
      },
      {
        name: "tomato3",
        price: 57
      },
      {
        name: "tomato4",
        price: 58
      },
      {
        name: "tomato5",
        price: 59
      },
      {
        name: "tomato6",
        price: 60
      },
      {
        name: "tomato7",
        price: 61
      },
      {
        name: "tomato8",
        price: 62
      }
    ];
    const addTocart = e => {
      // console.log(e);
      const cart1 = [...this.state.cart, e];
      this.setState({ cart: cart1 });
      // console.log(this.state.cart);
    };
    const clearall = () => {
      this.setState({
        cart: []
      });
    };
    const remove = (data, e) => {
      // console.log(data);
      // console.log(e);
      data.splice(e, 1);
      this.setState({
        cart: data
      });
    };
    return (
      <div>
        <div>
          <h1>grocery </h1>
          {data.map((e, index) => {
            return (
              <div key={index}>
                <table border="1">
                  <tr>
                    {/* <th>Name</th> */}
                    <td> name: {e.name}</td>
                    <td>price: {e.price}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          addTocart(e);
                        }}
                      >
                        add to cart
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
        <Maincart
          cartdata={this.state.cart}
          clearall={clearall}
          remove={remove}
        />
        {/* {this.state.cart.name}s */}
        {/* {console.log(this.state.cart)} */}
      </div>
    );
  }
}

export default Cart;
