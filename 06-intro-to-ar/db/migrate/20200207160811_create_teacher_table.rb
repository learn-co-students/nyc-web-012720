class CreateTeacherTable < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.boolean :wise
      t.string :subject
    end
  end
end
