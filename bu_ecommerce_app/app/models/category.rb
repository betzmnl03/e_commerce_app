class Category < ApplicationRecord
    # has_many :subcategories , dependent: :destroy
    has_many :products, dependent: :destroy
end
