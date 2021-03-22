class Api::V1::WishlistsController < Api::ApplicationController
    def create
        product= Product.find params[:product_id] 
        wishlist= Wishlist.new product: product, user: current_user
        if wishlist.save
            wishlists=current_user.wishlists
            render json: wishlists
        end
            
    end

    def index
        user = current_user
        wishlist = current_user.wishlists
       
        render json:wishlist
    end

    
    def get_wishlist

        wishlist = current_user.wishlists
        render json:wishlist
    end
    def destroy
       
        wishlist= current_user.wishlists
        product = params[:product_id].to_i
        wishlist.each do |w|
            if w.product_id == product
                item = Wishlist.find_by_id w.id
                item.destroy

            end
        end
        wishlist = current_user.wishlists
        render json:wishlist

       
    end
end
