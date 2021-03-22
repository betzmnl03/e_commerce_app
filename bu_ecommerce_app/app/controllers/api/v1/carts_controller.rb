class Api::V1::CartsController < Api::ApplicationController

    def create
        product= Product.find params[:product_id] 
        cart= Cart.new product: product, user: current_user, size:params[:size], quantity:params[:quantity]
        if cart.save
            # cart_final = current_user.cart_products
            render(
                json: cart,
                status: 200
            )
        else
            render(
                json: {message:"item exists"},
                status: 420
            )
        end
    end

    def index
        user = current_user
        cart = current_user.carts
        render json:cart
    end

    def get_cart_details
        cart = current_user.carts
        render json: cart
    end
    
    def get_cart
        cart = current_user.carts
        render json:cart
    end
    def destroy
        cart = current_user.carts
        product = cart.find_by_product_id params[:product_id]
        product.destroy
        render(
            json: {removed_from_cart: true},
            status: 200
        )
    end
end
