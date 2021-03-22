class CartSerializer < ActiveModel::Serializer
  attributes :id, :product, :user, :size, :quantity

  
end
