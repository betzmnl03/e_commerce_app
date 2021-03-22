class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :subcategory, :name, :brand, :description, :color, :price, :size, :images, :wishlisted

  def wishlisted
  
    wishlists = current_user.wishlists  
    wishlists.each do |item|
      if item.product_id == object.id
        return true
      end
    end
  end


  has_many :reviews
  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :reviewer, :created_at

    def reviewer
      object.user.first_name
    end
  end    

  
end
