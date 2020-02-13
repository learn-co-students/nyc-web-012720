class Drivers < ActiveRecord::Migration[5.0]
  def change
     create_table :drivers do |t|
      t.string "name"
    
      t.timestamps "date"
     end 
  end
end
