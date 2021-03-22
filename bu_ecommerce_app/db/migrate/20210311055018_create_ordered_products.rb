class CreateOrderedProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :ordered_products do |t|
      t.string :size
      t.string :name
      t.integer :quantity
      t.integer :price
      t.references :order, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
