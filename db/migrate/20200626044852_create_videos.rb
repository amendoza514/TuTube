class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :user_id, null:false
      t.string :title, null:false
      t.string :description
      t.string :category 
      t.string :tags 
      t.boolean :comment_visibility, null:false, default: true
      t.timestamps
    end

    add_index :videos, :user_id
    add_index :videos, :title
  end
end
