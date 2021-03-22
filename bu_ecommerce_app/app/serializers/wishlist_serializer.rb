class WishlistSerializer < ActiveModel::Serializer

    attributes :id, :user, :product, :created_at
end