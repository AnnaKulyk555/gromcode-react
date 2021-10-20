import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      { id: '1', name: 'iPad', price: 799 },
      { id: '2', name: 'iPad Pro', price: 1099 },
      { id: '3', name: 'iPad Pro Pro', price: 3000 },
    ],
  };

  render() {
    const count = this.state.cartItems.length;

    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
