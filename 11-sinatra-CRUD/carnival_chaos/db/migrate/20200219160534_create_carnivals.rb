class CreateCarnivals < ActiveRecord::Migration
  def change
    create_table :carnivals do |t|
      t.string :name
      t.string :location
      t.integer :number_of_rides 
      t.string :img_url 
    end 
  end
end
