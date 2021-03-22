class SearchSerializer < ActiveModel::Serializer
  puts "*************************************here"
  # attributes :id

  belongs_to :product

  
end
