class OrderMailer < ApplicationMailer

    def order 
        mail(
            to: 'betsy@example.ca',
            from: 'support@bm.io',
            cc: 'jj@movies.com',
            bcc: 'someone.else@example.com',
            subject: 'Order Confirmation'
        )

    end

    def new_order(order)
        @order = order
        @user = @order.user 
        @products = @order.ordered_products
       
        mail(
            to: @user.email,
            subject: "Order Confirmation"
        )
    end
end

