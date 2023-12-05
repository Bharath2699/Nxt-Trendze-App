// Write your code here
import Popup from 'reactjs-popup'
import {useState} from 'react'
import CardContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const [status, setStatus] = useState(true)
  const [message, setMessage] = useState(false)

  return (
    <CardContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(each => {
          total += each.quantity * each.price
        })

        const onClickCashOnDelivery = () => {
          setStatus(prevState => !prevState)
        }

        const handleConfirmOrder = () => {
          setMessage(prevState => !prevState)
        }

        return (
          <>
            <div className="summary-container">
              <h1 className="order-totals">
                Order Total:
                <span className="price">Rs {total}/-</span>
              </h1>
              <p className="carts-length">{cartList.length} items in cart</p>
              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <>
                    <div className="order-contents">
                      <div className="prices">
                        <h1 className="order-qty">
                          {cartList.length} items in cart
                        </h1>
                        <h1 className="order-totals">
                          Total Price :
                          <span className="price"> Rs {total}/-</span>
                        </h1>
                      </div>
                      <div className="payment-modes">
                        <button
                          type="button"
                          className="payments-button"
                          disabled
                        >
                          Card
                        </button>
                        <button
                          type="button"
                          className="payments-button"
                          disabled
                        >
                          Net Banking
                        </button>
                        <button
                          type="button"
                          className="payments-button"
                          disabled
                        >
                          UPI Pay
                        </button>
                        <button
                          type="button"
                          className="payments-button"
                          onClick={onClickCashOnDelivery}
                        >
                          Cash on Delivery
                        </button>
                      </div>
                      <button
                        type="button"
                        className="confirm"
                        disabled={status}
                        onClick={handleConfirmOrder}
                      >
                        Confirm Order
                      </button>
                      {message && (
                        <h1 className="success-message">
                          Your order has been placed successfully
                        </h1>
                      )}
                    </div>
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </>
                )}
              </Popup>
            </div>
          </>
        )
      }}
    </CardContext.Consumer>
  )
}
export default CartSummary
