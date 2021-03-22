class ProductCollectionSerializer < ActiveModel::Serializer
  attributes :id, :category, :subcategory, :name, :brand, :description, :color, :price, :size, :images

end
