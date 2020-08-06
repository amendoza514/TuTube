class UpdateVideo < ActiveRecord::Migration[5.2]
  def change
      remove_column :videos, :tags
      add_column :videos, :tags, :string, array: true
  end
end
