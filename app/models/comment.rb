# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :content, presence:true, length: {minimum: 1}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    has_many :likes, as: :likeable, dependent: :destroy
   
end
