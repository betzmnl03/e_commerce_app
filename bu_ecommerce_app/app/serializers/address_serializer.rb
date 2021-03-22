class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line1, :line2, :city, :province, :postal_code, :user_id

  
end
