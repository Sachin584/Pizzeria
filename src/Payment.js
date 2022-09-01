import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = "pk_test_51Ld8rBSBbWLLm5N7Q11MGwHh5Rwt6w3c4lnUyu7UmqvUyiWg0dMaA8F4WsLLkedNzqqFbQQqzs5BfHwAIZ5kE0QR009uBpkvPj"
    const onToken = token =>{
        console.log(token)
        alert("Payment Complete")
    }

return (
    <StripeCheckout
    label="Checkout"
    name = "Ecomm"
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={stripePrice}
    panelLabel="Buy now"
    token={onToken}
    stripeKey={publishableKey} />
)

}

export default StripeButton