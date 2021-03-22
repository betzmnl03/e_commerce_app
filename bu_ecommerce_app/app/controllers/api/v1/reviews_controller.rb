class Api::V1::ReviewsController < Api::ApplicationController

    before_action :review_params, only:[:create]

    def create

        puts params
        @product = Product.find_by_id params[:product_id]
        # @body = params[:params].body
        # puts @body
        @review=Review.new review_params
        @review.product=@product
        @review.user=current_user
        @review.save
        render json: @review
        # redirect_to product_path(@product), notice: 'Review created!'
    end

    private

    def review_params
        @review = params.require(:review).permit(:body, :rating)
    end
end
