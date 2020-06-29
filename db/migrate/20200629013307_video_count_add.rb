class VideoCountAdd < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer
  end
end
