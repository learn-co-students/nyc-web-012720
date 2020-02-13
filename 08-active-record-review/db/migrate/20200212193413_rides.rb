class Rides < ActiveRecord::Migration[5.0]
  def change
    create_table :rides do |t|
      t.integer :customer_id
      t.integer :driver_id
      t.float :distance
      t.float :cost
    
      t.timestamps
    end
    
  end
end
