# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  like          :boolean          not null
#  user_id       :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    belongs_to :likeable, polymorphic: true
    validates :user_id, uniqueness: {scope: [:likeable_type, :likeable_id]}
    validates :user_id, presence: true

    belongs_to :user,
    foreign_key:  :user_id,
    class_name: :User

end
