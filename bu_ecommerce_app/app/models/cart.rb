class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates(
    :product_id,
    uniqueness:{
      scope: :user_id,
      message: "already added to the cart"
    }
  )
end
