class CreateStudentTable < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :grade
      t.float :gpa
      t.integer :teacher_id
    end
  end
end
