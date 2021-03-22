class Order < ApplicationRecord
  belongs_to :user
  belongs_to :address

  # has_many :ordered_products
  has_many :ordered_products
end
