import React, { useContext } from 'react';
import './App.css';
import { GlobalContext } from "./GlobalContext";

function Cart() {

  const { cartItems, cartItemsUnique , RemoveItem } = useContext(GlobalContext);

  //console.log(cartItems.reduce((a, b) => a + (b['cost'] || 0), 0))

  /*
  {cartItemsUnique.map(a => <div key={"product000" + a.item.id}>
        <div>{a.item.product + "  " + a.cqty}</div>
      </div>)}
      cartItems.reduce(((a,b) => b.cost+a.cost),0)
      */
  return (
    <div className="cart-main">
      <div className="cart-header" style={{display:'flex', justifyContent:'space-between'}}>
        <span className="cart-title">CART ITEMS </span>
  <span className="total-cost">Total Cost: <span style={{fontWeight:'bold'}}>{ "$" + cartItems.reduce((a, b) => a + (b['cost'] || 0), 0)}</span></span>
      </div>
      {cartItemsUnique.map(cItem => <div className="cart-item">
        <img src={cItem.item.img} alt="product" className="cart-item-image" />
        <div className="cart-item-body">
          <div className="cart-item-title">{cItem.item.product}</div>
          <div className="card-body-upper" >
            <div className="cart-item-cost">{"$" + cItem.item.cost}</div>
          </div>
          <div className="card-item-lower" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="cart-item-qty">{"+"+cItem.cqty}</div>
            <btn onClick={() => RemoveItem(cItem.item.id) } className="btn btn-primary rem-from-cart-btn">Remove Item</btn>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Cart;
