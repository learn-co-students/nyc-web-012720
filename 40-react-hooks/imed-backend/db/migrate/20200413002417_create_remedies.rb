class CreateRemedies < ActiveRecord::Migration[6.0]
  def change
    create_table :remedies do |t|
      t.string :name
      t.string :ingredients
      t.string :instructions
      t.boolean :is_alcoholic
      t.string :image

      t.timestamps
    end
  end
end
