class CreatePrints < ActiveRecord::Migration[6.1]
  def change
    create_table :prints do |t|
      t.string :title
      t.string :image_link
      t.string :anime_name
      t.boolean :is_digital
      t.boolean :is_physical
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
