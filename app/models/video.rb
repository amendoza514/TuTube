# == Schema Information
#
# Table name: videos
#
#  id                 :bigint           not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  description        :string
#  category           :string
#  tags               :string
#  comment_visibility :boolean          default(TRUE), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  views              :integer
#
class Video < ApplicationRecord
    validates :title, presence:true 
    has_one_attached :video 
    has_one_attached :thumbnail 


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    def self.previews(id)
        self.where.not(id: id).limit(10).shuffle
        #active record method
    end
end
