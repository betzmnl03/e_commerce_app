class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :created_at
  
    
  end
  