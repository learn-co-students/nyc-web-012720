class AddColumnToCustomer < ActiveRecord::Migration[5.0]
  def change
    add_column :customers, :last_name, :string
  end
end
