class ChargesController < Api::ApplicationController

    def create
        Stripe.api_key = ENV["STRIPE_SECRET_KEY"]


        puts params
        # order = Order.find(params[:orderId])
        # amount = order.shoes.sum(:cost)*100
         amount = params[:amount]
        charge = Stripe::Charge.create(
            :amount=> amount,
            :description => "OG store",
            :currency => "usd",
            :source => params[:token]
        )
    end





end
