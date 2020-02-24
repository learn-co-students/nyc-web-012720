class CreateCereals < ActiveRecord::Migration[5.2]
  def change
    create_table :cereals do |t|
      t.string :name
      t.string :brand
      t.integer :release_year
      t.string :img_url
      t.string :slogan

      t.timestamps
    end
  end
end
