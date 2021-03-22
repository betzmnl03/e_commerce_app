class Api::V1::OrderedProductsController < Api::ApplicationController
    def create
        puts "********************************************************"
       
        user = current_user
        cart_all = current_user.carts
        puts cart_all
        order = Order.find_by_id params[:order]
        cart_all.each do |item|
            product = Product.find_by_id(item.product_id)
            ordered_product = OrderedProduct.new product:product, size:item.size, price:item.product.price, order:order, quantity:item.quantity, name:item.product.name
            ordered_product.save
        end

        ordered_products = OrderedProduct.all
        order = Order.all
        Cart.delete_all
        cart=Cart.all
       
        render(
            json: {order:order, ordered_products:ordered_products, cart:cart},
            status: 200
        )

        # render(
        #     json: address,
        #     status: 200
        # )
    end
end
