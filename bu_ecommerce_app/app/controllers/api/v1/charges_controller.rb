class Api::V1::ChargesController < Api::ApplicationController


    Stripe.api_key =ENV["stripe"]
    def create

      puts params
      user = current_user
      id = params[:id]
      amount = params[:amount]
        # Create a payment intent with the expected amount,
        begin
        payment_intent = Stripe::PaymentIntent.create(
          amount: amount,
          currency: 'cad',
          description: "Order for ",
          payment_method: id,
          statement_descriptor: 'TimeSink submit',
          confirm: true
        )
        # return the client secret
        puts payment_intent

        render(
          json: {id: payment_intent.id,client_secret: payment_intent.client_secret},
          status: 200)
      end

      rescue Stripe::CardError => e
        render json: e.message
      rescue =>e
        render json: e
          
      end
    
end
