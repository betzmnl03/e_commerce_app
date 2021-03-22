class Api::V1::OrdersController < Api::ApplicationController
    # before_action :address_params, :only[:create]
    def create
        user = current_user
        order = Order.new order_params
        order.user = user
        address= Address.find_by_id params[:address]
        order.address = address
        order.save
        OrderMailer.new_order(order).deliver_now
        render(
            json: order,
            status: 200
        )
    end

    def index 
        puts "*************************************"
        orders = current_user.orders.order(created_at: :desc)
        render json:orders
    end

    def show
        order = Order.find_by_id params[:id]
        render(
            json: order,
            status: 200
        )
    end

    private

    def order_params
         params.require(:order).permit(:firstname,:lastname, :phone, :amount)
    end
end
