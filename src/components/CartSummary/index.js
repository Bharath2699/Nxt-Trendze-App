// Write your code here
import CardContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CardContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.quantity * each.price
      })
      return (
        <>
          <div className="summary-container">
            <h1 className="order-total">
              Order Total:
              <span className="price">Rs {total}/-</span>
            </h1>
            <p className="carts-length">{cartList.length} items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CardContext.Consumer>
)
export default CartSummary
