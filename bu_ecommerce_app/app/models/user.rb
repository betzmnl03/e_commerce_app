class User < ApplicationRecord

    has_secure_password

    has_many :wishlists
    has_many :wishlist_products, through: :wishlists, source: :product

    has_many :carts
    has_many :cart_products, through: :carts, source: :product

    has_many :address, dependent: :destroy

    has_many :orders, dependent: :destroy

    has_many :reviews, dependent: :nullify


end
