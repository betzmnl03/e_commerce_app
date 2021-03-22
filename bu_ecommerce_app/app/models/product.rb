class Product < ApplicationRecord
    belongs_to :category, optional: true
    belongs_to :subcategory, optional: true

    has_many :carts, dependent: :destroy
    has_many :cart_users, through: :carts, source: :user

    has_many :wishlists, dependent: :destroy
    has_many :wishlist_users, through: :carts, source: :user

    has_many :ordered_products, dependent: :destroy

    has_many :reviews, dependent: :nullify 
end

