import React from "react";
function Maincart(props) {
  // const cartitem = props.cartdata.map((e, index) => {
  //   return (
  //     <div key={index}>
  //       <table border="1">
  //         <tr>
  //           <th>Name</th>
  //           <th>Price</th>
  //         </tr>
  //         <tr>
  //           <td>
  //             <button>remove</button>
  //           </td>
  //         </tr>
  //       </table>
  //     </div>
  //   );
  // });

  ///////////////////////////

  // const total = props => {
  //   const sum = 0;
  //   props.cartdata.reduce((total, sum) => {
  //     return total + props.cartdata.price;
  //   });
  // };
  const total = props.cartdata
    .map(e => {
      return e.price;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  if (props.cartdata.length != 0) {
    return (
      <div>
        {/* {console.log(props.cartdata.price)} */}
        <h1>cart</h1>
        <div>
          <table border="1">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>
                <button onClick={props.clearall}>clear all</button>
              </th>
            </tr>
            {props.cartdata.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.remove(props.cartdata, index);
                      }}
                      // data={props.cartdata}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>total items:{props.cartdata.length}</td>
              <td>
                total:
                {total}
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h1>Cart</h1>
        cart is empty
      </div>
    );
}
export default Maincart;
