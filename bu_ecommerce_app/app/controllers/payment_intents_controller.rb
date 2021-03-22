class PaymentIntentsController < ApplicationController

    def create
        #create a payment intent with 

        payment_intent = Stripe::PaymentIntent.create(
            amount: 1000,
            currency: "usd",
            description: "Order for" 
            statement_descriptor: "TimeSink submit"
        )

        render json: {client_secret: payment_intent.client_secret}
    end
end
