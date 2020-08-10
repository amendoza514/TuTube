# == Schema Information
#
# Table name: videos
#
#  id                 :bigint           not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  description        :string
#  category           :string
#  comment_visibility :boolean          default(TRUE), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  views              :integer
#  tags               :string           is an Array
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

    has_many :likes, as: :likeable, dependent: :destroy

    def self.previews(id)
        self.where.not(id: id).limit(10).shuffle
        #active record method
    end

    def likes_count
        likes = 0
        self.likes.each do |like|
            if like.like 
                likes += 1
            end
        end
        return likes
    end 

      def dislikes_count
        dislikes = 0
        self.likes.each do |like|
            if !like.like
                dislikes += 1
            end
        end
        return dislikes
    end 

end
