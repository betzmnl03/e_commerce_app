class OrderSerializer < ActiveModel::Serializer
  attributes :id, :ordered_products, :amount, :address, :firstname, :lastname, :created_at, :actual_products, :phone


  def actual_products
    products=[]
    object.ordered_products.each do |item|
      product = Product.find_by_id(item.product_id)
      products.push(product)
    end
   
    return products
  end

  # has_many :ordered_products
  #   class OrderedProductsSerializer < ActiveModel::Serializer
  #   attributes :id, :size, :quantity, :price, :product

  #   # def author_full_name
  #   #   object.user&.full_name
  #   # end

  #   belongs_to :product

  #   class ProductSerializer < ActiveModel::Serializer
  #     attributes :id, :category, :subcategory, :name, :brand, :description, :color, :price, :size, :images
  #   end
    
  #   end
end
