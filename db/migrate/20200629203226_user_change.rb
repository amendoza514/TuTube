class UserChange < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :verified, :boolean
    add_column :users, :icon_color, :string
  end
end
