class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.integer :year
      t.bigint :upvotes
      t.bigint :downvotes
      t.string :img

      t.timestamps
    end
  end
end
