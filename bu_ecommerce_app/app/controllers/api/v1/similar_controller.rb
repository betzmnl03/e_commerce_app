class Api::V1::SimilarController < Api::ApplicationController
    def show

        puts params
        @product = Product.find_by_id params[:id].to_i
        @cat = @product.category.id
        @sub = @product.subcategory_id
        @brand = @product.brand
        @products = Product.where("category_id = ? AND subcategory_id = ? AND brand = ?", @cat, @sub, @brand)
        render json: @products
    end

end
