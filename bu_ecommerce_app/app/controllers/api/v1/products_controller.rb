class Api::V1::ProductsController < Api::ApplicationController
    def index
        @category = params[:category_id]
        @subcategory = params[:subcategory_id]
        @products = Product.where("category_id = ? AND subcategory_id = ?", @category, @subcategory)
        render json: @products
    end

    def show

        product = Product.find_by_id params[:id]
        render json:product
       

    end

    def get_similar
        @product = Product.find_by_id params[:id]
        @cat = @product.category.id
        @sub = @product.categories.id
        @brand = @product.brand
        @products = Product.where("category_id = ? AND subcategory_id = ? AND brand = ?", @cat, @sub, @brand)
        render json: @products
    end

end
