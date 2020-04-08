class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :movie, foreign_key: true
      t.integer :stars
      t.string :content

      t.timestamps
    end
  end
end
